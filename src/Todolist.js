import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input ,Button, List,Icon} from 'antd';
import store from './store'
import './Todolist.css'






class Todolist extends Component {
    // state = {  }
    constructor(){
        super()
        console.log(store.getState())
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
       // this.clickBtn = this.clickBtn.bind(this);
        //this.deleItem = this.deleItem.bind(this)
        store.subscribe(this.storeChange);
    }
    
    render() { 
        return (
            <div style={{ position: 'relative'}}>
                <div className = 'header'>
                    <div className = 'top'>
                        <span className= 'title'>ToDoList</span>
                        <Input
                                placeholder = {this.state.inputValue}
                                style = {{width:'300px',marginRight:'10px'}}
                                onChange = {this.changeInputValue}
                                value = {this.state.inputValue}
                                onKeyDown = {this.enterDown.bind(this)}
                        />
                    </div>
                </div>

            
                <div className = 'list'>
                    <h2> <span className = 'left'>正在进行</span> <span  > {this.state.unDone.list.length}</span></h2>
                    <div style = {{marginTop:'10px',width:'600px'}}>
                        <List id='1'
                            className = 'left'
                            style = {{display:this.state.unDone.display,background:'#fff',width:'400px'}}
                            
                            bordered
                            dataSource = {this.state.unDone.list}
                            renderItem = {(item,index) => <List.Item  key = {index}>
                                <input type = 'checkbox'  onClick = {this.toUndone.bind(this,index,item)} checked={this.state.unDone.checked}/>
                                <span style= {{marginLeft:'10px',marginRight:'10px'}}>{item}</span>
                                <Icon type="minus-circle" className = 'right' onClick={this.deleItem.bind(this,index,this.state.unDone.name) }/>
                            </List.Item>}
                        />
                    </div>
                </div>
            



                <div className = 'list' >
                    <h2> 已经完成 <span > {this.state.Done.list.length}</span></h2>
                    <div style = {{marginTop:'10px',width:'600px'}}>
                        <List id='2'
                            className = 'left'
                            style = {{display:this.state.Done.display,background:'#fff',width:'400px'}}
                            bordered
                            dataSource = {this.state.Done.list}
                            renderItem = {(item,index) => <List.Item  key = {index}>
                                <input type = 'checkbox' onClick = {this.toDone.bind(this,index,item)} checked={this.state.Done.checked}/>
                                <span style= {{marginLeft:'10px',marginRight:'10px'}}>{item}</span>
                                <Icon type="minus-circle" onClick={this.deleItem.bind(this,index,this.state.Done.name)}/>
                        </List.Item>}
                        />
                    </div>
                </div>
            </div>
        );
    }
    changeInputValue(e){
        // console.log(e.target.value)
        const action = {
            type:'changInput',
            value:e.target.value
        }
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState());
    }
    
    enterDown(e){
        if(e.keyCode==13){
            const action = {
                type:'addItem',
            }
            store.dispatch(action)
        }
    }



    deleItem(index,name){
        const action = {
            type : 'deleItem',
            index,
            name
        }
        store.dispatch(action)
    }
    toUndone(index,ele){
        const action = {
            type :'toUndone',
            index,
            ele
        }
        store.dispatch(action)
    }
    toDone(index,ele){
        const action = {
            type :'toDone',
            index,
            ele
        }
        store.dispatch(action)
    }

}
 
export default Todolist;