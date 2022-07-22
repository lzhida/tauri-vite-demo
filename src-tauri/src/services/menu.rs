use tauri::{Menu, WindowMenuEvent};
// use tauri::{CustomMenuItem,MenuItem,Submenu,}

pub fn new() -> Menu {
    // TODO: 添加菜单项
    // let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    // let close = CustomMenuItem::new("close".to_string(), "Close");
    // let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    // Menu::new()
    //     .add_native_item(MenuItem::Copy)
    //     .add_item(CustomMenuItem::new("hide", "Hide"))
    //     .add_submenu(submenu)

    let context = tauri::generate_context!();
    if cfg!(target_os = "macos") {
        tauri::Menu::os_default(&context.package_info().name)
    } else {
        tauri::Menu::default()
    }
}

pub fn menu_event(event: WindowMenuEvent) -> () {
    match event.menu_item_id() {
        // TODO: 添加菜单功能
        // "quit" => {
        //     println!("退出应用");
        // }
        // "close" => {
        //     println!("关闭应用")
        // }
        _ => {}
    };
}
