import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input ,Box ,Typography  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width : '100%',
        height:'100%',
        position: 'relative'
    },
    messageStyle:{
        backgroundColor:'white',
        textAlign:'right',
        float:'right',
        padding:'5px',
        marginRight:'20px',
        marginTop :'10px'
    }

  }));
  function  Chat (){

    const classes = useStyles();
    const [messageData ,setMessageData] = useState('')
    const[Message,setMessage] =useState([])

    const handleMessage=(e)=>{
        debugger
        if(e.key === 'Enter'){
            debugger
            let sst= {Msg:e.target.value}
            setMessage(result => [...result, sst])
            setMessageData('')
            
        }
       
    }
    const ss =()=>{
        setMessageData('')
    }
    const getMessage =(e)=>{
        setMessageData(e.target.value)
    }
    // useEffect(() => {
    //     ss()
    //   }, [Message]);
    return (
        <div className={classes.root} >
            <div>{Message.Msg}</div>
            {Message.map((e) => (
                <div style={{ width: '100%' }}>
                    <Typography >
                        <Box className={classes.messageStyle} color="secondary.main">{e.Msg}</Box>
                    </Typography>
                </div>
            ))}
            <input placeholder="Type Your Message ..." style={{ border: 0,padding:'5px', position: 'fixed', bottom: '10px', width: '95%' }}
             value={messageData||''}
             onChange={getMessage}
             onKeyPress={handleMessage}/>
        </div>
    );
};



export default Chat;