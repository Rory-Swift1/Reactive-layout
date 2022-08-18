import './index.css'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
function CssTest() {
    const [mediastate,setMediastate] = useState<boolean>(false);
     useEffect(()=>{
        window.addEventListener('resize',handleReiwportChange)
       
        return ()=> window.removeEventListener('resize',handleReiwportChange)
     },[mediastate])
     function handleReiwportChange():any{
         let result = window.matchMedia('(min-width:320px) and (max-width:766px)')
         let result2 = window.matchMedia('(min-width:768px) and (max-width:900px)')
         let result3 = window.matchMedia('(min-width:901px)')
         if(result.matches){
           setMediastate(true);
            console.log('小屏幕');
         }else if(result2.matches){
            setMediastate(true);
             console.log('中等屏幕');
          }else if(result3.matches){
            setMediastate(true);
            console.log('大屏幕');
          }else if(result.matches||result2.matches||result3.matches === false){
            setMediastate(true);
            console.log('超小屏');
          }
     }
    return (
        <>
            <div className="grid-container">
                <div className="title"><span>标题</span></div>
                <input className="searchinput" />
                <div className="navgator1"><span>导航1</span></div>
                <div className="navgator2"><span>导航2</span></div>
                <div className="navgator3"><span>导航3</span></div>
                <button className='login'>登录</button>
                <button className='regist'>注册</button>
            </div>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} >
                Download
            </Button>
        </>
    );
}


export default CssTest