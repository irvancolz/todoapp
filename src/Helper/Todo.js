export function getTodoList(){
   return fetch("https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io");
}

export function getActivityList(id){
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
}