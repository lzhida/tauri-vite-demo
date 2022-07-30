use tauri::Manager;

#[tauri::command]
pub async fn close_splashscreen(window: tauri::Window) {
    // close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
pub fn toggle_devtools(window: tauri::Window) {
    if window.is_devtools_open() {
        window.close_devtools();
        println!("关闭控制台");
    } else {
        window.open_devtools();
        println!("打开控制台");
    }
}