
// get list

export function getTodoList(){
   return fetch("https://todo.api.devcode.gethired.id/activity-groups?email=irvansaharudin@skyshi.com");
}

export function getActivityList(id){
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}?email=irvansaharudin@skyshi.com`)
}

// create new
export function createActivity(data){
    return fetch(`https://todo.api.devcode.gethired.id/todo-items?email=irvansaharudin@skyshi.com`,{
        method: 'post',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
    })
}
export function createTodo(){
    const data ={
        title : 'New Activity',
        email : 'irvansaharudin@skyshi.com'
    }
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups?email=irvansaharudin@skyshi.com`, {
        method:'POST',
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body : JSON.stringify(data),
    })      
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
}


// update 
export function updateActivity(id, data){
    return fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
    })
}
export function updateTodo(id, data){
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}`,{
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
    })
}

// delete
export function deleteTodo(id){
    return fetch(`https://todo.api.devcode.gethired.id/activity-groups/${id}`, {
        method: 'DELETE',
    })
}

export function deleteActivity(id){
    return fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`,{
        method: 'DELETE',
    })
}