<template>
    <div class="form-row">
        <div class="form-group col-md-8 flex">
            <label for="task_description">Task description</label>
            <input type="text" class="form-control" id="task_description" placeholder="Enter Task description" v-model="task.description">
        </div>
        <div class="form-group col-md-4">
            <input type="time" class="form-control" placeholder="Enter Task time" v-model="task.time">
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskInput",
        props: {
            task: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>
