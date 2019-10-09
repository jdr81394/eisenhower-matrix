<?php

namespace App\Http\Controllers;

// use Laravel\Lumen\Routing\TasksController as BaseController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

use App\Task;

use DB;
use Exception;
class TasksController extends Controller
{
    //

    public function index(Request $request) {
        if($request->has('action')) {
            switch($request->action) {
                case 'getUndefinedTasks':
                    return $this->getUndefinedTasks();
                    break;
                case 'getToDoTasks':
                    return $this->getToDoTasks();
                    break;
            }
        }
    }

    private function getUndefinedTasks() {

        try {
            $where = [
                ['importance', '=', null],
                ['urgency', '=', null]
            ];

            $result = Task::select('*')->where($where)->get();

            Log::info(json_encode($result));

            return response()->json($result, 200);
            
        } catch (Exception $e) {
            Log::info("This is the error:  $e");
            echo $e->getLine();
            echo $e->getMessage();
        }

    }

    private function getToDoTasks() {
        try {
            $where = [
                ['importance', '=', 1],
                ['urgency', '=', 1]
            ];

            $result = Task::select('*')->where($where)->get();

            return response()->json($result, 200);

        } catch(Exception $e) {
            Log::info("This is the error:  $e");
            echo $e->getLine();
            echo $e->getMessage();
        }
    }



}
