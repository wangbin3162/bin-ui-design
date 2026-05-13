---
title: Upload
---

<b-back-top></b-back-top>

# Upload

A file upload button with a simple upload wrapper.

## Basic Usage

Basic usage: click to upload, selecting one file at a time.

<preview path="./demo/Upload/Basic.vue"></preview>

## Multi-select

Enable multi-select mode to select multiple files at once.

<preview path="./demo/Upload/Multiple.vue"></preview>

## Manual Upload

Bind `before-upload` and return `false` to prevent the default upload process, allowing manual control of file upload.

You can freely control the upload logic. Refer to the API implementation for details.

<preview path="./demo/Upload/Handle.vue"></preview>

## Drag and Drop Upload

Set the `type` property to `drag` to enable drag-and-drop upload.

<preview path="./demo/Upload/Drag.vue"></preview>

## Attributes

| Parameter              | Description                                                                                                                                           | Type     | Options                           | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------- | ------ |
| action            | Upload URL. Required                                                                                                                               | string   | —                                | —      |
| headers           | Upload request headers                                                                                                                                   | Object   | —                                | {}     |
| multiple          | Whether to support multi-select                                                                                                                                   | Boolean  | —                                | false  |
| paste             | Whether to support paste upload                                                                                                                               | Boolean  | —                                | false  |
| disabled          | Disabled                                                                                                                                           | Boolean  | —                                | false  |
| data              | Additional parameters sent with the upload                                                                                                                           | Object   | —                                | —      |
| name              | Upload file field name                                                                                                                               | String   | —                                | file   |
| with-credentials  | Support sending cookie credentials                                                                                                                       | Boolean  | —                                | false  |
| show-upload-list  | Whether to show the uploaded file list                                                                                                                         | Boolean  | —                                | true   |
| type              | Upload control type                                                                                                                                 | String   | select / drag | select |
| accept            | Accepted file types. Native accept attribute of input. Filters files on selection                                                                            | String   | —                                | —      |
| format            | Supported file types. Unlike accept, format identifies files by their extension                                                                                  | String   | —                                | —      |
| max-size          | File size limit in KB                                                                                                                          | Number   | —                                | —      |
| before-upload     | Hook before upload. Receives the file. If it returns false or a rejected Promise, the upload is cancelled                                                                      | Function | —                                | —      |
| on-progress       | Hook during upload. Returns event, file, fileList                                                                                             | Function | —                                | —      |
| on-success        | Hook on upload success. Returns response, file, fileList                                                                                      | Function | —                                | —      |
| on-error          | Hook on upload error. Returns error, file, fileList                                                                                         | Function | —                                | —      |
| on-preview        | Hook when clicking an uploaded file link. Returns file. Access server response via file.response                                                      | Function | —                                | —      |
| on-remove         | Hook when a file is removed from the list. Returns file, fileList                                                                                            | Function | —                                | —      |
| on-format-error   | Hook on file format validation failure. Returns file, fileList                                                                                            | Function | —                                | —      |
| on-exceeded-size  | Hook when file exceeds size limit. Returns file, fileList                                                                                        | Function | —                                | —      |
| default-file-list | Default uploaded file list, e.g., [{ name: 'img1.jpg', url: 'http://www.xxx.com/img1.jpg' }, { name: 'img2.jpg', url: 'http://www.xxx.com/img2.jpg' }] | Array    | —                                | []     |

## Methods

| Method Name     | Description             | Parameter |
| ---------- | ---------------- | ---- |
| clearFiles | Clear the uploaded file list | —   |

## Slot

| Name    | Description                                   |
| ------- | -------------------------------------- |
| default | The trigger element for the upload component. Defaults to a button     |
| tip     | Helper tip message, e.g., "A single file cannot exceed 2MB" |
