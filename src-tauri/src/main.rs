#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod services;
use self::services::{command, menu, tray};
use tauri_plugin_log::{LogTarget, LoggerBuilder};
use tauri_plugin_serialport;
use tauri_plugin_store::PluginBuilder;

fn main() {
    let context = tauri::generate_context!();
    let targets = [LogTarget::LogDir, LogTarget::Stdout, LogTarget::Webview];
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![command::close_splashscreen])
        .menu(menu::new())
        .on_menu_event(|event| {
            menu::menu_event(event);
        })
        .system_tray(tray::new())
        .on_system_tray_event(|app, event| tray::add_tary_event(app, event))
        .plugin(tauri_plugin_serialport::init())
        .plugin(PluginBuilder::default().build())
        .plugin(LoggerBuilder::new().targets(targets).build())
        .run(context)
        .expect("error while running tauri application");
}
