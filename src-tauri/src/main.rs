#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod services;
use self::services::{command, menu, tray};
use tauri_plugin_serialport;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![command::close_splashscreen])
        .menu(menu::new())
        .on_menu_event(|event| {
            menu::menu_event(event);
        })
        .system_tray(tray::new())
        .on_system_tray_event(|app, event| tray::add_tary_event(app, event))
        .plugin(tauri_plugin_serialport::init())
        .run(context)
        .expect("error while running tauri application");
}
