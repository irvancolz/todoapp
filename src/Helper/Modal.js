

export default function Modalhandler(){
    let showModal;
    function openHandler(){
        showModal = true;
    }
    function closeHandler(){
        showModal = false;
    }
    function target(txt){
        return txt
    }
    function callback(fn){
        fn();
    }
    return({
        showModal,
        openHandler,
        closeHandler,
        target,
        callback,
    })
}
 