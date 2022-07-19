#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod plugins;
use self::plugins::awesome;
use self::plugins::serialport_handler;


fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
    .menu(if cfg!(target_os = "macos") {
      tauri::Menu::os_default(&context.package_info().name)
    } else {
      tauri::Menu::default()
    })
    .plugin(awesome::init())
    .plugin(serialport_handler::init())
    .run(context)
    .expect("error while running tauri application");
}
