/*
 * @Description: 串口操作
 * @Author: zhidal
 * @Date: 2022-07-18 16:58:44
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-19 09:39:47
 */

use tauri::{
    plugin::{Builder, TauriPlugin},
    Runtime,
  };
use serialport::{self, };

#[tauri::command]
fn avaiable_ports() -> Vec<String> {
  let mut list = match serialport::available_ports() { 
    Ok(list) => list.clone(), 
    Err(_) => vec![]
  };
  list.sort_by(|a, b|  {
    a.port_name.cmp(&b.port_name)
  });
  println!("获取串口列表: {:?}", &list);
  
  let mut name_list: Vec<String>= vec![];
  for i in &list {
    println!("串口名称: {}", i.port_name);
    name_list.push(i.port_name.clone());
  }

  name_list
}

pub fn init<R: Runtime>() -> TauriPlugin<R> {
  Builder::new("serialport_handler")
    .invoke_handler(tauri::generate_handler![avaiable_ports, ])
    .build()
}