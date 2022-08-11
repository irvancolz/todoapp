import axios from "axios";

export function getTodoList(){
   return fetch("https://todo.api.devcode.gethired.id/activity-groups?email=irvansaharudin@skyshi.com");
}

export function getActivityList(id){
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}?email=irvansaharudin@skyshi.com`)
}
export function updateActivity(id, data){
    return fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}?email=irvansaharudin@skyshi.com`,{
        method: 'patch',
        mode: 'cors',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
    })
}
export function createTodo(){
    const dummyId = Math.floor(1000 + Math.random() * 9000);
    const time = Date.now();
    const created = new Date(time).toISOString();

    const data ={
        title : 'New Activity',
        email : 'irvansaharudin@skyshi.com'
    }
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups?email=irvansaharudin@skyshi.com`, {
        method:'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body : JSON.stringify(data),
    })
}

export function deleteTodo(id){
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}?email=irvansaharudin@skyshi.com`, {
        method: 'delete',
    })
}

export function deleteActivity(id){
    return fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}?email=irvansaharudin@skyshi.com`,{
        method: 'delete',
    })
}