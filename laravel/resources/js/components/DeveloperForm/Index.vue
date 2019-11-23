<template>
    <div class="row">
        <div class="col">
            <form>
                <TaskInput v-for="task in tasks" :task="task"/>
                <button type="button" class="btn btn-default" @click="addNewTask">Add task</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import TaskInput from '../TaskInput';
    export default {
        name: "DeveloperForm",
        components: {TaskInput},
        data(){
            return {
                tasks: [
                    {description: '', time: '', comment: '', blocker: '', project_id: null}
                ],
            }
        },
        methods: {
            addNewTask(){

            }
        }
    }
</script>

<style scoped>

</style>
