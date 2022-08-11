import Header from "./Header";
import TodoItem from "./Todoitem";
import ButtonCstm from "./ButtonCstm";
import ActivityItem from "./Activityitem";
import Modal from "./Modal";
import FormEdit from "./FormEdit";
import Alert from "./Alert";
import Dropdown from "./Dropdown";


export default function Component(){
    return(
        {   
            ActivityItem,
            Alert,
            ButtonCstm,
            Dropdown,
            FormEdit,
            Header,
            TodoItem,
            Modal,
        }
    )
}