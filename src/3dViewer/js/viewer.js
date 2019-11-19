
var container;

var camera, controls, scene, renderer, hemisphereLight;

var selectedObj, originalMaterial;

var modelCenter;

var urlRoot = "/rlerp";

var meshList = {};

function IsPC()
{
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

$(document).ready(function(){

    if ( !Detector.webgl ) {
        Detector.addGetWebGLMessage();
        return;
    }

    init();
    
    animate();

    if (!IsPC()){
        $("#info").append("<p>旋转：单指按住，移动<br>缩放：双指缩放<br>平移：双指按住，移动<br>模型居中：单指双击</p>");
        var i = 0;
        $('#container').on('click', function () {
            i++;
            setTimeout(function () {
                i = 0;
            }, 500);
            if (i > 1) {
                controls.target.copy(modelCenter);
                controls.center();
                controls.update();
                render();
                i = 0;
            }
        });
    }else{
        showExample();
    }

});

function showExample()
{
    var url = 'data/stl.json';

    $.get(url, {}, function (data) {
        var i = 0;
        var myVar = setInterval(function(){
            var list = [];
            list.push(data[i]);
            renderModels(list);
            i++;
            if(i==data.length) clearInterval(myVar);
        },
        10)
    });

    render();
}


//清除模型
function clearModels()
{
    var len = scene.children.length;
    for(var i = 1; i < len; ++i){
        scene.remove(scene.children[1]);
    }
}

//加载某个项目某个分区某个包的模板
function loadModels(project_id, partition_id, package_id, component_no)
{
    clearModels();

    var url = urlRoot + "/viewer/formwork?prj_id="+project_id+"&part_id="+partition_id+"&pack_id="+package_id;
    if(arguments[3])
        url = url + "&component_no="+component_no;

    $.get(url, {}, function (data) {
        renderModels(data);
    });

    render();
}

//加载一个模板
function loadOneFormwork(formwork_id)
{
    clearModels();

    if(meshList[formwork_id])
    {
        var edges = new THREE.EdgesHelper(meshList[formwork_id], 0x000000, 20);
        scene.add(meshList[formwork_id]);
        scene.add(edges);
        updateModels();
    }
    else
    {
        var url = urlRoot + "/viewer/formwork/oneFormwork?formwork_id="+ formwork_id;

        $.get(url, {}, function (data) {
            renderModels(data);
        });
    }

    render();
}

//增加显示一个模板
function addOneFormwork(formwork_id)
{
    //先重场景中找到
    for (var i = 1; i < scene.children.length; i += 2)
    {
        if(scene.children[i].userData.id == formwork_id)
            return;
    }

    if(meshList[formwork_id])
    {
        var edges = new THREE.EdgesHelper(meshList[formwork_id], 0x000000, 20);
        scene.add(meshList[formwork_id]);
        scene.add(edges);
        updateModels();
    }
    else
    {
        var url = urlRoot + "/viewer/formwork/oneFormwork?formwork_id="+ formwork_id;

        $.get(url, {}, function (data) {
            renderModels(data);
        });
    }
    render();
}

//去掉显示一个模板
function removeOneFormwork(formwork_id)
{
    for(var i = 1; i < scene.children.length; ++i){
        if(scene.children[i].type == "Mesh" && scene.children[i].userData.id == formwork_id){
            scene.remove(scene.children[i]);
            scene.remove(scene.children[i]);
            return;
        }
    }
}

//initialize render camera scene light
function init() {

    // renderer
    renderer = new THREE.WebGLRenderer( { antialias: false } );
    renderer.setClearColor( new THREE.Color(0xEEEEEE) );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    container = document.getElementById( 'container' );

    container.appendChild( renderer.domElement );
    renderer.domElement.addEventListener( 'mouseup', mouseUp, false );
    window.addEventListener( 'resize', onWindowResize, false );

    // camera
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 6000;
    camera.position.x = 6000;
    camera.position.y = -6000;
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;

    // camera controls
    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 2.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.staticMoving = true;
    controls.addEventListener( 'change', render );

    // scene
    scene = new THREE.Scene();

    // light
    hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0x757575, 1 );
    scene.add( hemisphereLight );
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize();

    render();

}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
}

function mouseUp(event)
{
    if(event.which != 1 || controls.mouseMoved) return;

    var vector = new THREE.Vector3(
        ( event.clientX / window.innerWidth ) * 2 - 1,
        -( event.clientY / window.innerHeight ) * 2 + 1,
        0.5);

    vector.unproject(camera);

    var rayCaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

    var meshes = [];
    for(var i = 1; i < scene.children.length; i += 2)
    {
        meshes.push(scene.children[i]);
    }
    var intersects = rayCaster.intersectObjects(meshes);

    if (intersects.length > 0)
    {
        if (selectedObj != null)
        {
            selectedObj.material = originalMaterial;
        }

        if( intersects[0].object.type == "Mesh")
        {
            selectedObj = intersects[0].object;
            originalMaterial = selectedObj.material.clone();
            selectedObj.material = new THREE.MeshPhongMaterial( { color:0xa0b4cf, specular:0xa0b4cf, emissive:0x0f3fb1, shininess:6,side: THREE.DoubleSide} );
        }

        render();
    }
}


function initMatrix(matrixNumber)
{
    var origin = new THREE.Vector3(parseFloat(matrixNumber[0]), parseFloat(matrixNumber[1]), parseFloat(matrixNumber[2]));
    var xAxis = new THREE.Vector3(parseFloat(matrixNumber[3]), parseFloat(matrixNumber[4]), parseFloat(matrixNumber[5]));
    var yAxis = new THREE.Vector3(parseFloat(matrixNumber[6]), parseFloat(matrixNumber[7]), parseFloat(matrixNumber[8]));
    var zAxis = new THREE.Vector3(parseFloat(matrixNumber[9]), parseFloat(matrixNumber[10]), parseFloat(matrixNumber[11]));

    var matrix = new THREE.Matrix4();
    matrix.makeBasis(xAxis, yAxis, zAxis);
    matrix.setPosition(origin);

    return matrix;
}

var completedTasks = 0;
var parallelTasks = [];

function checkIfComplete(){
    completedTasks++;
    if(completedTasks == parallelTasks.length){
        //一个并发任务结束
        next();
    }
}

var serialTasks = [];

function renderModels(data)
{
    //根据data.length划分若干个串行任务，每个串行任务有parallelCount个并行任务
    var parallelCount = 1;

    var serialCount = parseInt(data.length / parallelCount);
    var remain = data.length % parallelCount;

    for(var i = 0; i < serialCount; ++i)
    {
        //定义一个串行任务
        var begin = i * parallelCount;
        var end = (i + 1) * parallelCount - 1;
        var sTask = defineSerialTask(data, begin, end);
        serialTasks.push(sTask);
    }

    if(remain > 0)
    {
        var begin = serialCount * parallelCount;
        var end = begin + remain - 1;
        var sTask = defineSerialTask(data, begin, end);
        serialTasks.push(sTask);
    }

    next(); //执行串行任务
}

function loadSTL(formwork){

    if(meshList[formwork['id']])
    {
        var edges = new THREE.EdgesHelper(meshList[formwork['id']], 0x000000, 20);
        scene.add(meshList[formwork['id']]);
        scene.add(edges);
    }
    else
    {
        var loader = new THREE.STLLoader();
        //var url =  urlRoot + '/Application/Ipm/Common/Stl/' + formwork['model']+'.stl';
        var url = 'data/stl/' + formwork['model']+'.stl';
        loader.load( url,  function ( geometry ) {

            geometry.applyMatrix(initMatrix(formwork['matrix']));
            geometry.scale(0.01, 0.01, 0.01);
            geometry.computeBoundingBox();
            geometry.computeBoundingSphere();

            var meshMaterial = new THREE.MeshPhongMaterial( { color:formwork['color'], specular:formwork['color'], emissive:0x1e1e1e, shininess:6, side: THREE.DoubleSide} );
            var mesh = new THREE.Mesh(geometry, meshMaterial);
            var edges = new THREE.EdgesHelper(mesh, 0x000000, 20);

            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.userData = formwork;

            meshList[formwork['id']] = mesh;
            scene.add(mesh);
            scene.add(edges);
            checkIfComplete();
        });
    }
}

function defineSerialTask(data, begin, end){

    return function(){
        parallelTasks = [];
        completedTasks = 0;

        //定义并行任务
        for(var j = begin; j <= end; ++j){

            var formwork = data[j];
            var pTask = (function(formwork){
                return function(){
                    loadSTL(formwork);
                }
            })(formwork);
            parallelTasks.push(pTask);
        }

        //执行并行任务
        for(var t in parallelTasks) {
            parallelTasks[t]();
        }
    }

}

//执行下一个串行任务
function next(){
    var currentTask = serialTasks.shift();
    if (currentTask){
        currentTask();
    }else{
        updateModels();
    }
}

//刷新模型，使得模型在视口中心
function updateModels()
{
    if(scene.children.length < 2) return;

    var max = scene.children[1].geometry.boundingBox.max;
    var min = scene.children[1].geometry.boundingBox.min;

    for(var i = 3; i < scene.children.length; i+=2){
        max.max(scene.children[i].geometry.boundingBox.max);
        min.min(scene.children[i].geometry.boundingBox.min);
    }

    modelCenter = new THREE.Vector3();
    modelCenter.addVectors(max, min);
    modelCenter.multiplyScalar(0.5);

    var diameter = new THREE.Vector3();
    diameter.subVectors(max, min);

    controls.radius = diameter.length() / 2;
    controls.target.copy(modelCenter);
    controls.center();
    controls.update();

    render();
}

function gui()
{
    var gui = new dat.GUI();
    var guiControls = new function (){
        this.skyColor = hemisphereLight.color.getStyle();
        this.groundColor = hemisphereLight.groundColor.getStyle();
    };

    gui.addColor(guiControls, 'skyColor').onChange(function (e) {
        hemisphereLight.color = new THREE.Color(e)
    });

    gui.addColor(guiControls, 'groundColor').onChange(function (e) {
        hemisphereLight.groundColor = new THREE.Color(e)
    });
}