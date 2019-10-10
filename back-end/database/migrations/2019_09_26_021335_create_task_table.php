<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::connection('mysql')->hasTable('tasks')) {
            Schema::connection('mysql')->create('tasks', function(Blueprint $table) {
                $table->increments('id');
                $table->string('name');
                $table->string('description');
                $table->boolean('importance')->nullable();
                $table->boolean('urgency')->nullable();
                $table->enum('time', ['Quick', 'Long', 'Very Long']);
                $table->boolean('completed');
                $table->timestamps();
            });
        } 
        // Schema::table('tasks', function (Blueprint $table) {
        //     //
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection('mysql')->dropIfExists('tasks');
    }
}
