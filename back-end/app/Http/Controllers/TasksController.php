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
                case 'getToDecideTasks':
                    return $this->getToDecideTasks();
                    break;
                case 'getToDelegateTasks':
                    return $this->getToDelegateTasks();
                    break;
                case 'getToDeleteTasks':
                    return $this->getToDeleteTasks();
                    break;
            }
        }
    }

    private function getUndefinedTasks() {

        try {
            $where = [
                ['importance', '=', null],
                ['urgency', '=', null],
                ['completed', '=', 0]
            ];

            $result = Task::select('*')->where($where)->get();

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
                ['urgency', '=', 1],
                ['completed', '=', 0]
            ];

            $result = Task::select('*')->where($where)->get();

            return response()->json($result, 200);

        } catch(Exception $e) {
            Log::info("This is the error:  $e");
            echo $e->getLine();
            echo $e->getMessage();
        }
    }

    private function getToDecideTasks() {
        try {

            $where = [
                ['importance', '=', 1],
                ['urgency', '=', 0],
                ['completed', '=', 0]
            ];

            $result = Task::select('*')->where($where)->get();

            return response()->json($result, 200);

        } catch(Exception $e) {
            Log::info("This is the error:  $e");
            echo $e->getLine();
            echo $e->getMessage();
        }
    }

    private function getToDelegateTasks() {
        try {
            $where = [
                ['importance', '=', 0],
                ['urgency', '=', 1],
                ['completed', '=', 0]
            ];

            $result = Task::select('*')->where($where)->get();

            return response()->json($result, 200);

        } catch(Exception $e) {
            Log::info("This is the error:  $e");
            echo $e->getLine();
            echo $e->getMessage();
        }
    }


    private function getToDeleteTasks() {
        try {
            $where = [
                ['importance', '=', 0],
                ['urgency', '=', 0],
                ['completed', '=', 0]
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
