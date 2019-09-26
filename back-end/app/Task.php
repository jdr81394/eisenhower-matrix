<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

use DB;


class Task extends Model {

    protected $table = 'tasks';

    protected $connection = 'mysql';

    protected $fillable = ['importance', 'urgency', 'time'];
}