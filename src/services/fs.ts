/*
 * @Description: tauri fs 模块
 * @Author: zhidal
 * @Date: 2022-07-16 10:16:38
 * @LastEditors: zhidal
 * @LastEditTime: 2022-07-16 14:28:28
 */

import type {
  FsOptions,
  FsDirOptions,
  FileEntry,
  BinaryFileContents,
} from '@tauri-apps/api/fs';
import fs from '@tauri-apps/api/fs';

/**
 * @description: 复制文件
 * @param {string} source 复制的文件路径
 * @param {string} destination 目标文件路径
 * @param {FsOptions} options { dir: string } 选项
 * @return {Promise<void>}
 */
function copyFile(
  source: string,
  destination: string,
  options?: FsOptions,
): Promise<void> {
  return fs.copyFile(source, destination, options);
}

/**
 * @description: 创建文件夹
 * @param {string} dir 创建文件夹路径
 * @param {FsDirOptions} options 选项 { dir: string, recursive: boolean}
 * @return {Promise<void>}
 */
function createDir(dir: string, options?: FsDirOptions): Promise<void> {
  return fs.createDir(dir, options);
}

/**
 * @description: 读取二进制文件
 * @param {string} filePath
 * @param {FsOptions} options
 * @return {*}
 */
function readBinaryFile(
  filePath: string,
  options?: FsOptions,
): Promise<Uint8Array> {
  return fs.readBinaryFile(filePath, options);
}

/**
 * @description: 读取目录
 * @param {string} dir
 * @param {FsDirOptions} options
 * @return {Promise<FileEntry[]>}
 */
function readDir(dir: string, options?: FsDirOptions): Promise<FileEntry[]> {
  return fs.readDir(dir, options);
}

/**
 * @description:
 * @param {string} filePath
 * @param {FsOptions} options
 * @return {*}
 */
function readTextFile(filePath: string, options?: FsOptions): Promise<string> {
  return fs.readTextFile(filePath, options);
}

/**
 * @description: 删除目录
 * @param {string} dir
 * @param {FsDirOptions} options
 * @return {Promise<void>}
 */
function removeDir(dir: string, options?: FsDirOptions): Promise<void> {
  return fs.removeDir(dir, options);
}

/**
 * @description: 删除文件
 * @param {string} filePath
 * @param {FsOptions} options
 * @return {*}
 */
function removeFile(filePath: string, options?: FsOptions): Promise<void> {
  return fs.removeFile(filePath, options);
}

/**
 * @description: 重命名文件
 * @param {string} oldPath
 * @param {string} newPath
 * @param {FsOptions} options
 * @return {Promise<void>}
 */
function renameFile(
  oldPath: string,
  newPath: string,
  options?: FsOptions,
): Promise<void> {
  return fs.renameFile(oldPath, newPath, options);
}

/**
 * @description: 写入二进制文件
 * @param {string} path
 * @param {BinaryFileContents} contents
 * @param {FsOptions} options
 * @return {Promise<void>}
 */
function writeBinaryFile(
  path: string,
  contents: BinaryFileContents,
  options?: FsOptions,
): Promise<void> {
  return fs.writeBinaryFile(path, contents, options);
}

/**
 * @description: 写入文本文件
 * @param {string} path
 * @param {string} contents
 * @param {FsOptions} options
 * @return {Promise<void>}
 */
function writeTextFile(
  path: string,
  contents: string,
  options?: FsOptions,
): Promise<void> {
  return fs.writeTextFile(path, contents, options);
}

export {
  copyFile,
  createDir,
  readBinaryFile,
  readDir,
  readTextFile,
  removeDir,
  removeFile,
  renameFile,
  writeBinaryFile,
  writeTextFile,
};

export default fs;
