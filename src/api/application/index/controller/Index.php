<?php
namespace app\index\controller;
use think\Db;

class Index
{
    public function index()
    {
        echo "update";
        echo "<br>";
        var_dump(Db::query('select * from user'));
    }
}
