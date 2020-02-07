(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
  "this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
  "this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA",
  "this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553",
  "this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93",
  "this.Container_940A84D7_859C_5696_41D3_DFA64C65F768",
  "this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9",
  "this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23, this.audio_51363033_7D42_A78A_41D2_25B2C2928D11, this.audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9]); this.init(); this.initGA(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_0C33FA52_1F2C_3BFF_419D_408DDD90800F.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -113.78,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5133DA93_7D43_788A_4195_473DB2431260",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 42.61,
 "hideEasing": "cubic_out",
 "hfov": 1.58
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -22.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -31.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.14,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.39,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_camera"
},
{
 "thumbnailUrl": "media/video_92F572DC_8343_06FB_41CF_864C3CA67A6B_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1496,
 "label": "escenas-de-la-guerra",
 "loop": false,
 "id": "video_92F572DC_8343_06FB_41CF_864C3CA67A6B",
 "class": "Video",
 "height": 900,
 "video": {
  "width": 1238,
  "mp4Url": "media/video_92F572DC_8343_06FB_41CF_864C3CA67A6B.mp4",
  "class": "VideoResource",
  "height": 746
 }
},
{
 "items": [
  {
   "media": "this.video_8D1816BF_835D_0EB5_41C0_020C81D2D133",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0C347A53_1F2C_3BFD_419F_CC856C91B8A8, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0C347A53_1F2C_3BFD_419F_CC856C91B8A8, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_0C347A53_1F2C_3BFD_419F_CC856C91B8A8",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 27.84,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_57126416_7DCF_AF8A_41AA_AB184A6512A2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.23,
 "hideEasing": "cubic_out",
 "hfov": 1.41
},
{
 "duration": 1000,
 "id": "effect_D530EA7A_FB82_341F_419B_CDE83A7C9D3F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_421F19E1_7DCE_B886_41DE_A5EDF1BA2977",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -20.81,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_68258B13_7CCE_998B_41DB_6F592F0455BB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": -29.1,
 "hideEasing": "cubic_out",
 "hfov": 1.87
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -0.02,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_3.jpg",
    "width": 652,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.18,
 "hideEasing": "cubic_out",
 "hfov": 1.23
},
{
 "levels": [
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 1788
  },
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1220
  },
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 610
  },
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 305
  }
 ],
 "id": "ImageResource_4E8F4045_7D43_A78F_41BF_008706213A36",
 "class": "ImageResource"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_0C340A52_1F2C_3BFF_41A4_0B583854E1DA",
 "class": "PlayList"
},
{
 "duration": 1000,
 "id": "effect_921753EC_8584_52BA_41E0_5462D2E16D21",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -120.54,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_3.jpg",
    "width": 652,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.76,
 "hideEasing": "cubic_out",
 "hfov": 1.06
},
{
 "duration": 1000,
 "id": "effect_6EE0F67B_7948_AE29_419A_AA5A6A67666F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -9.1,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6B81FAD8_7CC2_B886_4192_33E86037436A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": -3.27,
 "hideEasing": "cubic_out",
 "hfov": 2.14
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23.ogg",
  "mp3Url": "media/audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23.mp3"
 },
 "data": {
  "label": "Piano Inspiration (Full Complete)"
 }
},
{
 "items": [
  {
   "media": "this.video_92F572DC_8343_06FB_41CF_864C3CA67A6B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0C351A53_1F2C_3BFD_41BB_5700E573AD9D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0C351A53_1F2C_3BFD_41BB_5700E573AD9D, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_0C351A53_1F2C_3BFD_41BB_5700E573AD9D",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_927B716B_834D_03DD_4197_7D0AC69E6FAB_t.jpg",
 "scaleMode": "fit_inside",
 "width": 902,
 "label": "jose-felix-estigarribia",
 "loop": false,
 "id": "video_927B716B_834D_03DD_4197_7D0AC69E6FAB",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 878,
  "mp4Url": "media/video_927B716B_834D_03DD_4197_7D0AC69E6FAB.mp4",
  "class": "VideoResource",
  "height": 1052
 }
},
{
 "initialPosition": {
  "yaw": -1.86,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 3.35,
    "easing": "cubic_in_out",
    "yawSpeed": 5.72
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0BE5AC53_1F2C_3FFD_41BA_2200A85CC9A6"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 144.29,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.76,
 "hideEasing": "cubic_out",
 "hfov": 1.42
},
{
 "closeButtonBackgroundColor": [],
 "shadowHorizontalLength": 3,
 "id": "window_79C4972F_7748_AE29_41D3_D5203F685831",
 "backgroundOpacity": 1,
 "width": 800,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "Breve rese\u00f1a del Paraguay",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_79C4A72F_7748_AE29_41D5_D8131A239EC2"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "2vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window2883"
 },
 "titleFontFamily": "Arial"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 9",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 574.21,
   "class": "PanoramaMapLocation",
   "y": 533.88,
   "angle": -80.12
  }
 ],
 "id": "panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
 "overlays": [
  "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_tcap0",
  "this.overlay_631F5239_732F_3F6E_41B5_9678C09F1CA2",
  "this.overlay_63EC6BF1_732F_0CE1_4171_721515DC013C",
  "this.overlay_63F4827C_732F_1FE6_41BB_F64B4E68B7DF",
  "this.overlay_63C618C0_732F_0B1F_41C9_5F3690E00421",
  "this.overlay_527AA054_7DC2_A78E_41D9_0F6F9AB17A85",
  "this.overlay_4547CAF1_74C9_C0EE_41B8_D700698A4B8D",
  "this.overlay_4597D804_74CB_4F37_41D4_D30847642505",
  "this.overlay_595CF13E_74C8_C153_41BE_B8902DA3E0BE",
  "this.overlay_5A0B24BA_74C9_4752_41A0_F26068F5677B",
  "this.overlay_443486C1_74C9_432E_41D1_AF766A53550B",
  "this.overlay_6EF7314C_7948_A268_41CF_44989850F8EB",
  "this.overlay_6EF7C14C_7948_A268_41B1_8F488E12A8DE",
  "this.overlay_6F138C5B_7CC2_FFBB_41CA_5A6DB7C54CE8",
  "this.popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770",
  "this.overlay_692CBB65_7CC3_798F_41C8_2BBA042E542F",
  "this.popup_6B81FAD8_7CC2_B886_4192_33E86037436A",
  "this.overlay_68A9C086_7CC2_A88D_41D3_5F0383B1E29E",
  "this.popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83",
  "this.overlay_69B247F8_7CC1_6886_41D3_84F4B57D4655",
  "this.overlay_68F59811_7CC7_6786_41C3_6BCA7112D468",
  "this.overlay_6B3F2B44_7CC1_998E_41C6_453684498497",
  "this.overlay_6B1784D2_7CC1_688A_41C5_1693954F6213",
  "this.overlay_64DBD141_7CC1_A986_41DC_631A13120D60",
  "this.overlay_657C85EA_7CC1_6885_41D9_24CDD67A7117",
  "this.overlay_654B3F22_7CC2_B985_41C5_7FB184F1EC10",
  "this.overlay_6758C316_7CC3_698A_41D0_522DC7BF8F93",
  "this.overlay_62A48D5F_7CCE_99BA_41D2_0452C645DA8B",
  "this.popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415",
  "this.popup_6B25F113_7CC1_A98B_41D1_39883E487194",
  "this.popup_6541DF02_7CC2_B98A_41C5_0C282491D2C2",
  "this.popup_62D1ED37_7CCE_998A_41DD_980203AD3DEF",
  "this.popup_54273946_7D4F_B98A_41DA_F36DBD50FE18",
  "this.popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587",
  "this.popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9",
  "this.popup_5133DA93_7D43_788A_4195_473DB2431260",
  "this.popup_57BD21E6_7D42_A88A_41DD_386A14969465",
  "this.overlay_515F8C99_7DC2_9886_41D7_61753BD493E0",
  "this.popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A",
  "this.overlay_57957905_7DC2_998E_41DA_C37C84E61268",
  "this.overlay_52F72CF9_7DC3_F886_41D8_354B2AF8FF85",
  "this.overlay_4676159A_7CBF_A8BA_41D9_B2D0A31AE00E",
  "this.overlay_44555707_7CBE_E98A_4198_6FB953D13905",
  "this.popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C",
  "this.overlay_96276FEF_858C_32B6_41D0_781F1DB047BE",
  "this.overlay_907AFE62_859F_F5AE_41C9_1550C07F1298",
  "this.overlay_92008456_8584_5596_41AB_DAD576ACB00B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -147.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.64,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
   "distance": 1
  },
  {
   "yaw": -127.51,
   "class": "AdjacentPanorama",
   "backwardYaw": 149.15,
   "panorama": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
   "distance": 1
  },
  {
   "yaw": 171.97,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.42,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "distance": 1
  },
  {
   "yaw": 109.57,
   "class": "AdjacentPanorama",
   "backwardYaw": 29.54,
   "panorama": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
   "distance": 1
  },
  {
   "yaw": 129.35,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.26,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "levels": [
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_0.jpg",
   "width": 3628,
   "class": "ImageResourceLevel",
   "height": 5697
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_1.jpg",
   "width": 2608,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_2.jpg",
   "width": 1304,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_3.jpg",
   "width": 652,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_4.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_36DA5444_7449_4736_41C6_9EE93A6F222A",
 "class": "ImageResource"
},
{
 "items": [
  {
   "media": "this.video_93D6985C_834F_01F4_41DB_6D3F1D40F66C",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0C348A53_1F2C_3BFD_41A8_1CFD7647D924, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0C348A53_1F2C_3BFD_41A8_1CFD7647D924, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_0C348A53_1F2C_3BFD_41A8_1CFD7647D924",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 10",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 785.98,
   "class": "PanoramaMapLocation",
   "y": 741.43,
   "angle": 0
  }
 ],
 "id": "panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
 "overlays": [
  "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_tcap0",
  "this.overlay_63F60DAD_732F_0561_41AF_4D254467E807",
  "this.overlay_63CC16EF_732F_04E1_41CB_331CCC76E9B0",
  "this.overlay_53BD8953_7DC1_998A_41CF_5DE92D726EF0",
  "this.overlay_586D65A0_74C8_C16E_41DB_14CF96C489C8",
  "this.overlay_595373DB_74C9_C0D2_41AA_AC044C0AED8F",
  "this.overlay_595ED036_74C9_5F52_41D4_E5260BFB43A6",
  "this.overlay_5AFB6EF8_74D7_40DE_41C9_742ECC774634",
  "this.overlay_4EA59A9E_74C9_4352_41C6_955F836F751F",
  "this.overlay_471EE849_74C8_CF31_41DA_A1F34A8CB675",
  "this.overlay_483C7A05_75BB_4336_4178_9B610604F6B3",
  "this.overlay_483C6A05_75BB_4336_41A1_EA4959113365",
  "this.popup_483359CE_75BB_4132_41C8_2385EBA46B9F",
  "this.overlay_6F835B9F_7CC1_F8BA_41AF_DD8E58BBB5F1",
  "this.overlay_6B5D9D75_7CC3_998E_41D3_263894A6698F",
  "this.overlay_6B4C7C0F_7CC1_9F9B_41D9_E10843E21C7D",
  "this.overlay_6B739F5E_7CFE_F9BD_41D3_5B5544532AC2",
  "this.overlay_653F1755_7CC2_A98E_41AA_FE32D6513AB4",
  "this.overlay_65415B61_7CC1_B986_41C8_3BB63B98135A",
  "this.overlay_670A89E6_7CC3_788A_41CB_DD2C6EA7E9E0",
  "this.overlay_62F4BF37_7CCF_998A_41C9_FFA1EE8A34B9",
  "this.popup_6F8E3B80_7CC1_F885_41B0_913E3BAED8BD",
  "this.popup_6B7D4F3E_7CFE_F9FA_41C0_34FE098A0293",
  "this.popup_657A8B38_7CC1_B986_41DC_E13ED9FBF025",
  "this.popup_62E09F08_7CCF_9986_41B4_C612C7ED3D38",
  "this.popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A",
  "this.popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8",
  "this.popup_55530E52_7D41_7B85_41D3_D21BAEE45E56",
  "this.overlay_56563579_7D41_A987_41D8_729A99DD2A83",
  "this.popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE",
  "this.popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047",
  "this.overlay_57C61ECA_7DC7_F89A_41D3_549241EF15C2",
  "this.overlay_50DB5142_7DC7_6985_41DA_5BEDCC86A515",
  "this.popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D",
  "this.overlay_5697BC41_7DC6_9F86_41C0_098ED4A0BC90",
  "this.overlay_446E8442_7F41_AF85_41D0_88E2315CE5B0",
  "this.popup_47001AD2_7F42_9885_41B9_403B7B62136B",
  "this.overlay_4570523C_7F42_EBFE_41D4_B187085228BD",
  "this.overlay_442D0A08_7F42_BB85_41A8_DC46CB68C14A",
  "this.popup_45418F33_7F42_9989_41D5_287A481E4D1C",
  "this.overlay_46F858D3_7F41_B88B_41DA_2DFDEFFAC8F8",
  "this.popup_44EC61FE_7F41_E87A_41C4_785622A36C4B",
  "this.overlay_9626F06E_858C_EDB6_41E0_89ED6D620AE2",
  "this.overlay_9075A395_859C_336A_41C0_AB3D240701BA",
  "this.overlay_921A6D26_858B_F7B6_41D8_873B14B38D80"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -53.64,
   "class": "AdjacentPanorama",
   "backwardYaw": -147.35,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "distance": 1
  },
  {
   "yaw": -179.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.43,
   "panorama": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
   "distance": 1
  },
  {
   "yaw": 44.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -48.93,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "distance": 1
  },
  {
   "yaw": 0,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.5,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -160.29,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_550D4797_7D42_A88A_41B4_91E4E9A86D12",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.11,
 "hideEasing": "cubic_out",
 "hfov": 1.42
},
{
 "levels": [
  {
   "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_0.jpg",
   "width": 1226,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_1.jpg",
   "width": 653,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_2.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_3D296A5C_7F46_9BBE_41CB_DED7AC8E13AB",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -17.77,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 55.91,
 "hideEasing": "cubic_out",
 "hfov": 1.2
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 2",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 803.49,
   "class": "PanoramaMapLocation",
   "y": 1433.87,
   "angle": -62.58
  }
 ],
 "id": "panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
 "overlays": [
  "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_tcap0",
  "this.overlay_54998E8E_7459_4333_41AA_37BC2D265505",
  "this.overlay_50F3AE8E_7459_4332_41BB_5E042B2313C9",
  "this.overlay_5509354F_7457_4132_41CE_168B78672CE8",
  "this.overlay_470916D9_74CB_40DE_41DC_40CDA3F4A04C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 120.87,
   "class": "AdjacentPanorama",
   "backwardYaw": -121.03,
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
   "distance": 1
  },
  {
   "yaw": -11.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 132.83,
   "panorama": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
   "distance": 1
  },
  {
   "yaw": 149.8,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.94,
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "initialPosition": {
  "yaw": -135.66,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 71.26,
    "easing": "cubic_in_out",
    "yawSpeed": 142.18
   },
   {
    "targetYaw": 29.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.97,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 103.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -140.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -108.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.9,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -68.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -71.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 29.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D3DCF05_1F2C_395A_41BE_837A742706CA"
},
{
 "duration": 1000,
 "id": "effect_90555454_859C_55EA_41DA_E582E8A515FD",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_9DB4192F_859C_5FB6_41DB_B26439333009",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_0.jpg",
   "width": 1226,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_1.jpg",
   "width": 653,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_2.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_3D1CDA51_7F46_9B86_41CC_7C5B78F4109D",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 8",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 795.07,
   "class": "PanoramaMapLocation",
   "y": 366.64,
   "angle": 181.41
  }
 ],
 "id": "panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
 "overlays": [
  "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_tcap0",
  "this.overlay_63F7E689_732F_072E_41CA_1E7979FE244F",
  "this.overlay_63CCF6B3_732F_0762_41C2_B3FF56566B76",
  "this.overlay_630CC9AF_732F_0D62_41B6_24F2F7718ADB",
  "this.overlay_4DC75064_7DCE_A78E_41BB_305E2AF9A88D",
  "this.overlay_445072E6_74B9_C0F2_41C8_68564CCCE502",
  "this.overlay_5B17B366_74B7_41F2_41B3_1671E7945EFE",
  "this.overlay_59A64057_74B7_3FD2_41BF_8B308D428440",
  "this.overlay_5B4C739C_74C8_C156_4171_0FD6AAA48048",
  "this.overlay_4D20CEBC_74C9_C357_41C0_FD89B2559390",
  "this.overlay_40B6CAE7_74C9_C0F2_4160_04D7A81E5356",
  "this.overlay_6EF486A9_7948_AE28_4186_6DAC24AAF0FF",
  "this.overlay_6EF496A9_7948_AE28_41D4_D711988EA7A8",
  "this.overlay_6FD0C7EA_7CC1_A89A_41DE_7F8BDEA1F427",
  "this.overlay_68BF327B_7CC1_687A_41DA_7AE8F6340536",
  "this.overlay_6E36A5B5_7CCE_A88E_41D8_0FDF2C2B94B2",
  "this.popup_68258B13_7CCE_998B_41DB_6F592F0455BB",
  "this.popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08",
  "this.popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC",
  "this.overlay_69BAEA46_7CC2_9B8D_41DF_30F32BAA43BA",
  "this.overlay_6991D8D6_7CDE_B88A_41CD_62FCCD110213",
  "this.overlay_6AC796DC_7CC2_E8BE_417E_8D22BE70ED0B",
  "this.overlay_692965B0_7CC1_6886_41CB_65B53A9D0EE2",
  "this.overlay_644367A4_7CC2_A88D_41DF_199D56634A7D",
  "this.overlay_648DF15C_7CCE_A9BE_41B4_9BD0C96997FA",
  "this.overlay_644C0C22_7CCE_9F8A_41C6_8E3EE903E2E8",
  "this.overlay_6758E755_7CC2_E98F_41DA_E77602DC5399",
  "this.overlay_62ECB033_7CC1_678A_41D7_6B945A85FAEA",
  "this.popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC",
  "this.popup_69A62A26_7CC2_9B8A_41D6_DACDAEC1CF16",
  "this.popup_699D98A7_7CDE_B88A_4199_54AA28069533",
  "this.popup_6110E014_7CC1_678E_41D5_2510886C7E53",
  "this.popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5",
  "this.popup_5487D549_7D4E_A987_41D4_835867686345",
  "this.popup_553D087A_7D4E_B87A_419E_89BC379AF377",
  "this.popup_572876B8_7D41_E885_41D2_B5C07F2528F0",
  "this.popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B",
  "this.overlay_5728CFB5_7DC1_988E_41C8_368B04AC30EA",
  "this.popup_563C1494_7DC2_A88D_41DD_BA8C2553B005",
  "this.overlay_566C43DB_7DCF_A8BA_41B3_13C7A26A1810",
  "this.overlay_567B29B0_7DC1_B885_41D4_D7D82FF966F1",
  "this.overlay_45511FF0_7CC2_9886_41D3_99C6F8AA80DB",
  "this.overlay_47AE31A8_7CC1_E886_41C5_4C67A1767907",
  "this.popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5",
  "this.overlay_97C04846_858C_FDF6_41B2_54737BCEEDB0",
  "this.overlay_907B6FBD_859C_D29A_41C9_948C38E516EC",
  "this.overlay_921C23FE_8584_5296_41DD_5DEF4B254632"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 53.26,
   "class": "AdjacentPanorama",
   "backwardYaw": 129.35,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "distance": 1
  },
  {
   "yaw": 0.5,
   "class": "AdjacentPanorama",
   "backwardYaw": 0,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
   "distance": 1
  },
  {
   "yaw": -42.33,
   "class": "AdjacentPanorama",
   "backwardYaw": 49.3,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "distance": 1
  },
  {
   "yaw": -180,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.38,
   "panorama": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "levels": [
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4696
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_1.jpg",
   "width": 2616,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_2.jpg",
   "width": 1308,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_3.jpg",
   "width": 654,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_4.jpg",
   "width": 327,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_423619C0_7DCE_B886_41B8_9D89B19B5E95",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 168.07,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -2.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.51,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": 15.45,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 20.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 55.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 43.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 101.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 114.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D4E7FBF_1F2C_38A6_41BB_5FF6463AB819"
},
{
 "fieldOfViewOverlayInsideColor": "#FF0000",
 "id": "map_69020EB9_7449_435E_41CF_D5F57863A927",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1876,
 "label": "Planta Baja",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927.jpeg",
    "width": 1876,
    "class": "ImageResourceLevel",
    "height": 1609
   },
   {
    "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_lq.jpeg",
    "width": 276,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 237
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_6C2F47BC_7449_C156_41CA_FB850D37B14B",
  "this.overlay_6818ECC7_7449_C732_41DA_316C6BADAEEB",
  "this.overlay_6F0D0C09_7449_473E_41C8_C58148676689",
  "this.overlay_69B15D3C_7449_4156_41CA_FCB342656F87",
  "this.overlay_687569EB_7448_C0F2_41A6_7C54D36E20F4",
  "this.overlay_6FBD89A7_7448_C172_41AA_8CF19DA2E18E",
  "this.overlay_68427A5A_7448_C3D3_41CF_1F64681A901A",
  "this.overlay_6C286CBC_744F_4756_4192_203C0CAD1302",
  "this.overlay_6C248B70_744F_41EE_41B6_02687357F8C0",
  "this.overlay_68340D9B_744F_4152_41BC_4EC837EC4A5B",
  "this.overlay_6FD28344_744F_C136_41D3_249E0BD1A676"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "height": 1609
},
{
 "duration": 1000,
 "id": "effect_90797384_859C_336A_41D7_FDEE4ABD0EFD",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 4.12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 28.52,
 "hideEasing": "cubic_out",
 "hfov": 1.88
},
{
 "duration": 1000,
 "id": "effect_6EB60D2A_78DF_E22B_41DA_59F22F850E4B",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_421529DC_7DCE_B8BE_41D3_B3BEFE60A942",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 5250
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_1.jpg",
   "width": 2340,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_2.jpg",
   "width": 1170,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_3.jpg",
   "width": 585,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_4.jpg",
   "width": 292,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_54073BBA_7D46_98FA_41CA_DE333FA3B8F3",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -95.38,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_54273946_7D4F_B98A_41DA_F36DBD50FE18",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 14.96,
 "hideEasing": "cubic_out",
 "hfov": 2.3
},
{
 "levels": [
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_0.jpg",
   "width": 5844,
   "class": "ImageResourceLevel",
   "height": 3896
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_5E2145EB_7CC1_A89A_41A5_60C47CFF5D83",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 1",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 1445.97,
   "class": "PanoramaMapLocation",
   "y": 1422.87,
   "angle": 34.67
  }
 ],
 "id": "panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
 "overlays": [
  "this.overlay_6A4DDD67_7458_C1F2_41BB_A0CB77E638B2",
  "this.overlay_549307EB_745F_C0F1_41BA_4FB9E1DF1ECA",
  "this.overlay_6BEEA622_7458_C372_41CD_C4C9B10E8C86",
  "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0",
  "this.overlay_4EC05072_74CB_7FD2_41CC_D4B965AD3E43",
  "this.overlay_7924616C_774B_6228_41CB_04FC9FDA8187",
  "this.overlay_65C9D518_7748_E3E8_41C1_DDE6B84C93B0",
  "this.overlay_C07B9E88_CF73_A0BC_41BA_ACCDDE193D0D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -36.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.4,
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
   "distance": 1
  },
  {
   "yaw": -127.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 149.8,
   "panorama": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
   "distance": 1
  },
  {
   "yaw": -121.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 126.77,
   "panorama": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "initialPosition": {
  "yaw": 52.49,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -9.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.06,
    "pitchSpeed": 33.24,
    "easing": "cubic_in_out",
    "yawSpeed": 65.78
   },
   {
    "targetYaw": -9.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -9.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 58.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 145.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -121.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -53.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0EDBDEAD_1F2C_38AA_41B3_FCCB72F1A4C2"
},
{
 "duration": 1000,
 "id": "effect_92172D15_858B_F76A_41D2_74125918E909",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_4E889041_7D43_A787_41B3_DC4A3EE10855",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_4E98204C_7D43_A79D_41C3_9CEF2C8B5331",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -1.51,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 22.36
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 76.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 131.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 40.26,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -77.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.43,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7D747778_7323_05EE_41DC_97522F54C128_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -72.67,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_37B06473_75C8_C7D2_41D9_A6490CEFC935",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_3.jpg",
    "width": 652,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.84,
 "hideEasing": "cubic_out",
 "hfov": 1.56
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "levels": [
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_54074BBC_7D46_98FE_41CC_59034A81230E",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -175.34,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 27.63,
 "hideEasing": "cubic_out",
 "hfov": 2.51
},
{
 "levels": [
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_0.jpg",
   "width": 3628,
   "class": "ImageResourceLevel",
   "height": 5697
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_1.jpg",
   "width": 2608,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_2.jpg",
   "width": 1304,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_3.jpg",
   "width": 652,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_4.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_6EBEFD2B_78DF_E228_41D9_86556289A261",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 179.79,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_458480C0_7CC1_6886_41CB_73D8636B6DCC",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_1.jpg",
    "width": 653,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 22.09,
 "hideEasing": "cubic_out",
 "hfov": 2.61
},
{
 "levels": [
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 1788
  },
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1220
  },
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 610
  },
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 305
  }
 ],
 "id": "ImageResource_4EF1D05F_7D43_A7BB_41A2_33C857274DFB",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -20.66,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_3.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.79,
 "hideEasing": "cubic_out",
 "hfov": 0.94
},
{
 "levels": [
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_54097BC9_7D46_9886_41C3_47E3B4083276",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 76.48,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_566B7F84_7D46_988E_41BE_73EF3146CE56",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 42.89,
 "hideEasing": "cubic_out",
 "hfov": 1.57
},
{
 "levels": [
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_420A19D6_7DCE_B88A_41D1_A3FEA33A687B",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 5250
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_1.jpg",
   "width": 2340,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_2.jpg",
   "width": 1170,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_3.jpg",
   "width": 585,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_4.jpg",
   "width": 292,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_541D4BAD_7D46_989E_41DA_DB5F8207EDA2",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 27.32,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.36,
    "pitchSpeed": 8.37,
    "easing": "cubic_in_out",
    "yawSpeed": 15.81
   },
   {
    "targetYaw": 76.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 131.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 40.26,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -77.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.43,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D6ECF81_1F2C_395A_41AD_4B5591E43D60"
},
{
 "initialPosition": {
  "yaw": 126.36,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 66.95,
    "easing": "cubic_in_out",
    "yawSpeed": 133.53
   },
   {
    "targetYaw": 29.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.97,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 103.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -140.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -108.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.9,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -68.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -71.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 29.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_09263DB8_1F2C_38AA_41BE_51EB11B99878"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 159.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_536BE102_7DC3_E98A_41C1_DC1F77107319",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.29,
 "hideEasing": "cubic_out",
 "hfov": 1.42
},
{
 "levels": [
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_0.jpg",
   "width": 3628,
   "class": "ImageResourceLevel",
   "height": 5697
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_1.jpg",
   "width": 2608,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_2.jpg",
   "width": 1304,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_3.jpg",
   "width": 652,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_4.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_483349CE_75BB_4132_41CC_BB9AF1EF6966",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 13.77,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 74.15,
 "hideEasing": "cubic_out",
 "hfov": 1.82
},
{
 "initialPosition": {
  "yaw": -47.17,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 97.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.55,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": 113.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CDE8B34_1F2C_39BB_41B0_2F65035B1BF8"
},
{
 "initialPosition": {
  "yaw": 32.65,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -9.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.06,
    "pitchSpeed": 23.38,
    "easing": "cubic_in_out",
    "yawSpeed": 45.98
   },
   {
    "targetYaw": -9.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -9.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 58.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 145.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -121.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -53.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B047B6E_1F2C_39A7_417A_1AE0EA0AE09C"
},
{
 "duration": 1000,
 "id": "effect_49C55C9B_7449_4752_41D5_778AD11FD3A0",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 5250
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_1.jpg",
   "width": 2340,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_2.jpg",
   "width": 1170,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_3.jpg",
   "width": 585,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_4.jpg",
   "width": 292,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_540B4BC2_7D46_988A_41D4_0785272F4B3B",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9.ogg",
  "mp3Url": "media/audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9.mp3"
 },
 "data": {
  "label": "Inspiring Uplifting Emotional Piano"
 }
},
{
 "duration": 1000,
 "id": "effect_921B3444_8584_55EA_41D5_BC5AE0C58944",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 152.54,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 37.5,
    "easing": "cubic_in_out",
    "yawSpeed": 74.35
   },
   {
    "targetYaw": -34.79,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 57.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 56.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -38.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.18,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.28,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D064F3F_1F2C_39A6_41AC_39A888CC5BBD"
},
{
 "initialPosition": {
  "yaw": 179.62,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 43.98,
    "easing": "cubic_in_out",
    "yawSpeed": 87.37
   },
   {
    "targetYaw": -34.79,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 57.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 56.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -38.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.18,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.28,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CE15AFB_1F2C_38AD_4172_03E28930F409"
},
{
 "items": [
  {
   "media": "this.video_927B716B_834D_03DD_4197_7D0AC69E6FAB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0C34DA53_1F2C_3BFD_41BD_18C6D9CC7B47, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0C34DA53_1F2C_3BFD_41BD_18C6D9CC7B47, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_0C34DA53_1F2C_3BFD_41BD_18C6D9CC7B47",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 103.81,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_55530E52_7D41_7B85_41D3_D21BAEE45E56",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_3.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 15.35,
 "hideEasing": "cubic_out",
 "hfov": 1.69
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 171.3,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 55.41,
 "hideEasing": "cubic_out",
 "hfov": 2.54
},
{
 "initialPosition": {
  "yaw": -70.43,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -9.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.06,
    "pitchSpeed": 32.66,
    "easing": "cubic_in_out",
    "yawSpeed": 64.61
   },
   {
    "targetYaw": -9.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -9.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 58.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 145.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -121.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -53.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0BC6CC81_1F2C_3F5D_41B9_60F0FE23502F"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 105.22,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_563C1494_7DC2_A88D_41DD_BA8C2553B005",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 15.42,
 "hideEasing": "cubic_out",
 "hfov": 2.14
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -161.33,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_3.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.35,
 "hideEasing": "cubic_out",
 "hfov": 1.1
},
{
 "levels": [
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_0.jpg",
   "width": 3628,
   "class": "ImageResourceLevel",
   "height": 5697
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_1.jpg",
   "width": 2608,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_2.jpg",
   "width": 1304,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_3.jpg",
   "width": 652,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_4.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_6EFB311C_7948_A3E8_41D6_721F2868B881",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 0.5,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 2.41,
    "easing": "cubic_in_out",
    "yawSpeed": 3.83
   },
   {
    "targetYaw": 29.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.97,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 103.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -140.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -108.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.9,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -68.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -71.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 29.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0ED77ECB_1F2C_38EE_41B1_33A3509BEA0A"
},
{
 "thumbnailUrl": "media/video_93D6985C_834F_01F4_41DB_6D3F1D40F66C_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1422,
 "label": "cuadro-guerra-triple-alianza",
 "loop": false,
 "id": "video_93D6985C_834F_01F4_41DB_6D3F1D40F66C",
 "class": "Video",
 "height": 884,
 "video": {
  "width": 1218,
  "mp4Url": "media/video_93D6985C_834F_01F4_41DB_6D3F1D40F66C.mp4",
  "class": "VideoResource",
  "height": 758
 }
},
{
 "initialPosition": {
  "yaw": -180,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -0.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 94.31,
    "easing": "cubic_in_out",
    "yawSpeed": 188.48
   },
   {
    "targetYaw": 29.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.97,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 103.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -140.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -108.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.9,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -68.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -71.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 29.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CB30AC0_1F2C_38DB_418F_45C01AADF330"
},
{
 "initialPosition": {
  "yaw": -59.13,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -2.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.51,
    "pitchSpeed": 47.3,
    "easing": "cubic_in_out",
    "yawSpeed": 94.03
   },
   {
    "targetYaw": 15.45,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 20.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 55.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 43.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 101.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 114.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A850D5F_1F2C_39E5_41B5_648302E8B0F4"
},
{
 "items": [
  "this.PanoramaPlayListItem_0C35CA53_1F2C_3BFD_4187_B33122A5D504",
  "this.PanoramaPlayListItem_0C370A54_1F2C_3BFB_41B7_2BE431ECC221",
  "this.PanoramaPlayListItem_0C081A55_1F2C_3BE5_41B7_BCDF8B8C7AF0",
  "this.PanoramaPlayListItem_0C08BA55_1F2C_3BE5_41BB_03F8A95E80B7",
  "this.PanoramaPlayListItem_0C099A55_1F2C_3BE5_41B6_0171B145BA1C",
  "this.PanoramaPlayListItem_0C0A9A56_1F2C_3BE7_4198_C669D0F709B3",
  "this.PanoramaPlayListItem_0C0BBA57_1F2C_3BE5_41B0_DA3A069DC6A7",
  "this.PanoramaPlayListItem_0C0CAA57_1F2C_3BE5_4174_77DE560E5B4F",
  "this.PanoramaPlayListItem_0C0E3A58_1F2C_3BEB_41B4_709D0C2385B6",
  "this.PanoramaPlayListItem_0C0F4A58_1F2C_3BEB_41B0_0259426E8679",
  "this.PanoramaPlayListItem_0C009A59_1F2C_3BED_41BE_6CC2BAE4B5DB"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_540EEBCD_7D46_989E_41B8_F8DE7501ABE6",
 "class": "ImageResource"
},
{
 "duration": 1000,
 "id": "effect_6B576BFF_7CC1_987A_41D4_F423817BBAB3",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -179.99,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_1.jpg",
    "width": 653,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.92,
 "hideEasing": "cubic_out",
 "hfov": 1.35
},
{
 "initialPosition": {
  "yaw": 114.75,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 106.5,
    "easing": "cubic_in_out",
    "yawSpeed": 212.99
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D21AEE8_1F2C_38AA_41A8_316D658D48DA"
},
{
 "initialPosition": {
  "yaw": 30.6,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 27.76,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.23,
    "pitchSpeed": 2.02,
    "easing": "cubic_in_out",
    "yawSpeed": 3.06
   },
   {
    "targetYaw": -4.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 61.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -172.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A673D03_1F2C_395D_418E_BB6C198E2FBF"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -104.92,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_553D087A_7D4E_B87A_419E_89BC379AF377",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 15.44,
 "hideEasing": "cubic_out",
 "hfov": 2.04
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -67.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_44EC61FE_7F41_E87A_41C4_785622A36C4B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": -7.26,
 "hideEasing": "cubic_out",
 "hfov": 1.89
},
{
 "levels": [
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_422929BF_7DCE_B8FA_41C9_3D604782A849",
 "class": "ImageResource"
},
{
 "duration": 1000,
 "id": "effect_37B91467_75C8_C7F2_41D3_21C3C32CBCD2",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -76.08,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_45418F33_7F42_9989_41D5_287A481E4D1C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 39.45,
 "hideEasing": "cubic_out",
 "hfov": 1.65
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 7",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 796.16,
   "class": "PanoramaMapLocation",
   "y": 205.65,
   "angle": 181.25
  }
 ],
 "id": "panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
 "overlays": [
  "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_tcap0",
  "this.overlay_6319A273_7321_1FE1_41B1_1ADCF754116C",
  "this.overlay_63FDF024_732F_1B67_41C6_5A047CF3C1BD",
  "this.overlay_47287BD9_7CC7_9886_41B9_601864129C3D",
  "this.overlay_5B32F65A_74B9_43D2_41D2_D4340B33B438",
  "this.overlay_5B89082B_74BB_4F72_41CC_92CC173FBCA5",
  "this.overlay_597410AF_74BB_3F72_41C5_851D6596A7C0",
  "this.overlay_49D5A305_74C9_4136_41D0_B7BC001524D8",
  "this.overlay_41A20A23_74C9_4371_41C5_D4170493786B",
  "this.overlay_6EABBD58_78DF_E268_41DB_E85D06D89FFD",
  "this.overlay_6EA53D58_78DF_E268_41DB_895C90750F09",
  "this.overlay_6F4C55A7_7CC3_A88A_41DD_5F999B18A768",
  "this.overlay_699549F9_7CDF_B887_419D_0112A1FD30DB",
  "this.overlay_6B4F5BB5_7CC1_B88E_41CC_42FEEA464B98",
  "this.overlay_6B5EBFE4_7CC6_988E_41D3_070DCEB1543F",
  "this.overlay_6B7155D5_7CC2_A88E_41D5_BF0E0010F0F6",
  "this.overlay_65501360_7CC1_6986_41C0_686F805FD606",
  "this.overlay_65452B74_7CC2_998D_4174_EDE15BA2F6A2",
  "this.popup_6EBEED2B_78DF_E228_419E_876D9449DEE3",
  "this.popup_6FB84588_7CC3_A886_41DA_D0B1AD27053F",
  "this.popup_698139CA_7CDF_B885_41A7_43F744AE1AF3",
  "this.popup_6B7F65B6_7CC2_A88A_41DE_1AB30138FA42",
  "this.popup_657B9B45_7CC2_998F_418A_FFB9E7844C96",
  "this.popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F",
  "this.popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D",
  "this.popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A",
  "this.popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665",
  "this.overlay_54AC7638_7DDE_EB85_41C2_FA956E2EB3D6",
  "this.overlay_452C5461_7CC6_AF86_41D1_CF19116B30BA",
  "this.popup_458480C0_7CC1_6886_41CB_73D8636B6DCC",
  "this.overlay_451E122B_7CC2_AB9A_41B9_039657264BF1",
  "this.overlay_8CE20EC7_835D_1ED5_41DF_8221B426909F",
  "this.overlay_92487A46_834D_01D7_41A5_BF98C79EA584",
  "this.overlay_9051F465_859C_55AA_41AE_7CC0E9809E20"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 29.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 109.57,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "distance": 1
  },
  {
   "yaw": -27.46,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.78,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "distance": 1
  },
  {
   "yaw": -0.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -180,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "levels": [
  {
   "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_0.jpg",
   "width": 1226,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_1.jpg",
   "width": 653,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_2.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_3D43EA6E_7F46_9B9A_41D7_AF559CF80C20",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 1788
  },
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1220
  },
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 610
  },
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 305
  }
 ],
 "id": "ImageResource_4E89A040_7D43_A785_41D5_F3BA7DED3536",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_4EF1705D_7D43_A7BF_41B6_B292ACADAED5",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -101.04,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_3.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 17.58,
 "hideEasing": "cubic_out",
 "hfov": 1.62
},
{
 "initialPosition": {
  "yaw": -117.22,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 106.46,
    "easing": "cubic_in_out",
    "yawSpeed": 212.91
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A26ACAF_1F2C_38A5_4197_5D8B56AC4B28"
},
{
 "initialPosition": {
  "yaw": -179.5,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 73.87,
    "easing": "cubic_in_out",
    "yawSpeed": 147.42
   },
   {
    "targetYaw": -22.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -31.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.14,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.39,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0BA5BBFD_1F2C_38A5_41BA_2BA51F4E53A2"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 1,
    "easing": "cubic_in_out",
    "yawSpeed": 1
   },
   {
    "targetYaw": -22.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -31.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.14,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.39,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A184CDD_1F2C_38E5_41A4_B978090472BE"
},
{
 "duration": 1000,
 "id": "effect_907C1FAC_859C_D2BA_41DD_DB6512181B46",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -150.46,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 37,
    "easing": "cubic_in_out",
    "yawSpeed": 73.34
   },
   {
    "targetYaw": -34.79,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 57.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 56.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -38.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.18,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.28,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0946AE11_1F2C_3B7A_41B2_2B8E949A88CB"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 3",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 101.82,
   "class": "PanoramaMapLocation",
   "y": 1291.2,
   "angle": -22.88
  }
 ],
 "id": "panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
 "overlays": [
  "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_tcap0",
  "this.overlay_63012C92_7321_0B22_41B4_8548FFA07AC7",
  "this.overlay_5CE08A41_7449_C331_41D9_E06B6BABA738",
  "this.overlay_530347E1_7448_C0EE_41D6_D62CD5FDA849",
  "this.overlay_5EEA6E2F_7448_C372_41B8_F90221DD1398"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA"
  },
  {
   "yaw": 132.83,
   "class": "AdjacentPanorama",
   "backwardYaw": -11.93,
   "panorama": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
   "distance": 1
  },
  {
   "yaw": 126.77,
   "class": "AdjacentPanorama",
   "backwardYaw": -121.61,
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "initialPosition": {
  "yaw": 174.29,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -5.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.28,
    "pitchSpeed": 48.99,
    "easing": "cubic_in_out",
    "yawSpeed": 97.43
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 51.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 53.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 50.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 74.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -166.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 54.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D090F22_1F2C_395E_41B2_F6F110E83D34"
},
{
 "levels": [
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_0.jpg",
   "width": 3628,
   "class": "ImageResourceLevel",
   "height": 5697
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_1.jpg",
   "width": 2608,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_2.jpg",
   "width": 1304,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_3.jpg",
   "width": 652,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_4.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_6EF8867C_7948_AE2F_41D0_CA23B9123B0D",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -126.74,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 52.45,
    "easing": "cubic_in_out",
    "yawSpeed": 104.38
   },
   {
    "targetYaw": -22.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -31.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.14,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.39,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_09B93E30_1F2C_3BBA_41B1_A9BEE35DA166"
},
{
 "initialPosition": {
  "yaw": 97.22,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 9.55
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 113.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_camera"
},
{
 "levels": [
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_541DEBAF_7D46_989A_41B1_FA5578882B38",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_4EE00053_7D43_A78B_4190_49F82A4ABB2E",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 1788
  },
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1220
  },
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 610
  },
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 305
  }
 ],
 "id": "ImageResource_4EE98058_7D43_A785_4191_69DE0063FA42",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -170.13,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 54.16,
 "hideEasing": "cubic_out",
 "hfov": 1.25
},
{
 "levels": [
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 1788
  },
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1220
  },
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 610
  },
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 305
  }
 ],
 "id": "ImageResource_4E99304C_7D43_A79D_41D5_5DD7FC0DF257",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -0.54,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_47001AD2_7F42_9885_41B9_403B7B62136B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_1.jpg",
    "width": 653,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 4.33,
 "hideEasing": "cubic_out",
 "hfov": 1.09
},
{
 "initialPosition": {
  "yaw": 58.39,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -69.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.47,
    "pitchSpeed": 54.57,
    "easing": "cubic_in_out",
    "yawSpeed": 108.65
   },
   {
    "targetYaw": -106.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -59.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 16.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 49.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 11.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D531FDE_1F2C_38E6_41AA_7D3180A56C88"
},
{
 "initialPosition": {
  "yaw": 58.97,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 27.76,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.23,
    "pitchSpeed": 9.88,
    "easing": "cubic_in_out",
    "yawSpeed": 18.84
   },
   {
    "targetYaw": -4.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 61.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -172.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CC91B17_1F2C_3965_41B8_0C6E2A79A0B4"
},
{
 "initialPosition": {
  "yaw": -0.57,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.36,
    "pitchSpeed": 5.52,
    "easing": "cubic_in_out",
    "yawSpeed": 10.08
   },
   {
    "targetYaw": 76.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 131.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 40.26,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -77.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.43,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B64EBA0_1F2C_395B_41A9_9A7F044C42F6"
},
{
 "thumbnailUrl": "media/video_90157D98_8203_4A20_41CC_67A9FA2D574A_t.jpg",
 "scaleMode": "fit_inside",
 "width": 1920,
 "label": "rakiura teaser mute",
 "loop": false,
 "id": "video_90157D98_8203_4A20_41CC_67A9FA2D574A",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "mp4Url": "media/video_90157D98_8203_4A20_41CC_67A9FA2D574A.mp4",
  "class": "VideoResource",
  "height": 1080
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_0C33FA52_1F2C_3BFF_419D_408DDD90800F",
 "class": "PlayList"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -29.92,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5487D549_7D4E_A987_41D4_835867686345",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_3.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.36,
 "hideEasing": "cubic_out",
 "hfov": 1.1
},
{
 "items": [
  {
   "media": "this.video_90157D98_8203_4A20_41CC_67A9FA2D574A",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0C342A52_1F2C_3BFF_41BD_F85BDC2F375B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_0C342A52_1F2C_3BFF_41BD_F85BDC2F375B, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_0C342A52_1F2C_3BFF_41BD_F85BDC2F375B",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 5",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 1375.65,
   "class": "PanoramaMapLocation",
   "y": 576.09,
   "angle": -83.31
  }
 ],
 "id": "panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
 "overlays": [
  "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_tcap0",
  "this.overlay_63D8D63D_7321_0766_41D0_2B5D8231C748",
  "this.overlay_5CC40283_7449_C332_41C9_8069D9B730D1",
  "this.overlay_531A8EED_7448_C0F6_41CD_5D706BD85A25",
  "this.overlay_5DDB34F2_74B7_C0D2_41CE_37C25FF8F198",
  "this.overlay_9FC3C222_85BC_EDAE_41DD_790BBB06A27F",
  "this.overlay_9F45F2B1_85BC_32AD_41DC_8CE93C7E4BFF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -84.79,
   "class": "AdjacentPanorama",
   "backwardYaw": 42.12,
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
   "distance": 1
  },
  {
   "yaw": -5.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 178.14,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "initialPosition": {
  "yaw": -30.2,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -2.01,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.51,
    "pitchSpeed": 23.87,
    "easing": "cubic_in_out",
    "yawSpeed": 46.95
   },
   {
    "targetYaw": 15.45,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 20.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 55.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 43.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 101.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 114.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0A472D22_1F2C_395F_4186_8A57BE2905E4"
},
{
 "levels": [
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_540ACBC3_7D46_988A_41C9_13CC83B4F284",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 131.07,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B45FBCE_1F2C_38E7_41BB_690696BE552C"
},
{
 "levels": [
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5408FBCA_7D46_989A_41DF_112EBEA8F847",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -5.78,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 6.28
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 51.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 53.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 50.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 74.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -166.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 54.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_camera"
},
{
 "initialPosition": {
  "yaw": 95.21,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -5.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.28,
    "pitchSpeed": 27.95,
    "easing": "cubic_in_out",
    "yawSpeed": 55.15
   },
   {
    "targetYaw": -46.1,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 51.06,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 53.57,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 50.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 74.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -166.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -0.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 54.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -63.94,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 30.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -6.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.08,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0AE53D7C_1F2C_39AB_41A8_4FB2980E5211"
},
{
 "levels": [
  {
   "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_3D416A70_7F46_9B86_41BC_7292B36898FB",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 11",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 785.03,
   "class": "PanoramaMapLocation",
   "y": 910.3,
   "angle": 180.96
  }
 ],
 "id": "panorama_7D747778_7323_05EE_41DC_97522F54C128",
 "overlays": [
  "this.panorama_7D747778_7323_05EE_41DC_97522F54C128_tcap0",
  "this.overlay_631F3DEE_732F_04E2_41BE_037B67803BBA",
  "this.overlay_63FE59DA_732F_0D22_41CB_248E9040C4CE",
  "this.overlay_50948EE4_7DC2_F88D_41D4_D1E26DA44092",
  "this.overlay_45C3E042_74DB_3F32_41C2_20BE9BDE513F",
  "this.overlay_464DA314_74DB_C153_41B6_55AB5BB07F82",
  "this.overlay_4247EA74_74D8_C3D6_41CB_961CE8AF2AF7",
  "this.overlay_4020C417_74D9_C752_41CB_062EFA0ADDD3",
  "this.overlay_4CDA38E0_74C9_C0EE_418D_1EB5EA1A6EAA",
  "this.overlay_434AB1FF_74C9_40D2_41C8_4B5517AACEEB",
  "this.overlay_48AEABEB_74C8_C0F2_41DB_9B916C612E20",
  "this.popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711",
  "this.overlay_6F5945E4_7CC2_A88D_41C1_776976A62B3C",
  "this.overlay_60E4F02D_7CC1_679E_41D5_3F9C5BE15E90",
  "this.overlay_5EC116BB_7CCE_E8FA_41AC_75FAD72565F0",
  "this.popup_6F4545B5_7CC2_A88E_4171_91ABFD1ECCEE",
  "this.popup_550D4797_7D42_A88A_41B4_91E4E9A86D12",
  "this.popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E",
  "this.overlay_57E2D380_7D7E_A886_41DA_AB9242EAC4D7",
  "this.popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D",
  "this.overlay_50614AC6_7DC3_988A_41CA_E1A3A78A2C6D",
  "this.popup_536BE102_7DC3_E98A_41C1_DC1F77107319",
  "this.overlay_503C52DF_7DC3_A8BA_41BA_B1A6CBBF048A",
  "this.overlay_4C0E868D_7DC2_E89E_41C0_81732FF0C625",
  "this.overlay_9232E91B_834D_037D_41A8_A27C4FC69534",
  "this.overlay_965853EF_835F_06D5_41CF_3BA958061FD3",
  "this.overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54",
  "this.overlay_962E40C0_858C_2EEA_4198_3B6B45914624"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 149.15,
   "class": "AdjacentPanorama",
   "backwardYaw": -127.51,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "distance": 1
  },
  {
   "yaw": 179.43,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.5,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
   "distance": 1
  },
  {
   "yaw": -152.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -65.25,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -1.45,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_3.jpg",
    "width": 652,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 26.6,
 "hideEasing": "cubic_out",
 "hfov": 2.61
},
{
 "initialPosition": {
  "yaw": 27.76,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 2.23
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -4.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 61.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -172.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7E911130_7321_FD7E_41C8_3413131F93CA_camera"
},
{
 "levels": [
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_540A5BC4_7D46_988E_41C8_DB11B1FFAF26",
 "class": "ImageResource"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_51363033_7D42_A78A_41D2_25B2C2928D11",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_51363033_7D42_A78A_41D2_25B2C2928D11.ogg",
  "mp3Url": "media/audio_51363033_7D42_A78A_41D2_25B2C2928D11.mp3"
 },
 "data": {
  "label": "Inspiring Piano"
 }
},
{
 "items": [
  {
   "media": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_camera"
  },
  {
   "media": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_camera"
  },
  {
   "media": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_camera"
  },
  {
   "media": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA_camera"
  },
  {
   "media": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_camera"
  },
  {
   "media": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_camera"
  },
  {
   "media": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_camera"
  },
  {
   "media": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_camera"
  },
  {
   "media": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_camera"
  },
  {
   "media": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_camera"
  },
  {
   "media": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 6",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 973.3,
   "class": "PanoramaMapLocation",
   "y": 550.3,
   "angle": -87.53
  }
 ],
 "id": "panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
 "overlays": [
  "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_tcap0",
  "this.overlay_63D78E7A_7321_07E3_41D9_7D6C42976265",
  "this.overlay_59A71FAE_74B8_C172_41D3_4E2122E5A753",
  "this.overlay_5F818F2B_74B9_4172_41CF_531F0E90AD8A",
  "this.overlay_5D5171B2_74BB_C153_41D4_832669D3E542",
  "this.overlay_5E9CC8FE_74B9_C0D2_41D6_FC36A1E55B53",
  "this.overlay_59DDDB74_74B8_C1D6_41AD_FCA250C5A3B5",
  "this.overlay_562C3CF5_7DC7_988E_41BB_A5351190883C",
  "this.overlay_5EA13A47_74BF_C332_41D9_16C3D1D36F48",
  "this.overlay_37C404F3_75C8_C0D2_41CB_5F49807F6F16",
  "this.overlay_37C5E4F3_75C8_C0D2_41D4_3B58EBC42A69",
  "this.popup_37B06473_75C8_C7D2_41D9_A6490CEFC935",
  "this.overlay_6FA0E914_7CC2_998E_41C1_C70B327E4308",
  "this.overlay_69E04017_7CC1_E78B_41D0_383F479DFCFE",
  "this.overlay_6B49294E_7CC1_999A_41B0_2964F4E961BC",
  "this.overlay_6BA4D606_7CC7_AB8A_41D5_1FE7684556AD",
  "this.overlay_6B4ECDF1_7CC2_9886_41DA_DF189E07A751",
  "this.overlay_654B4AA3_7CFF_B88A_41DD_58C97C8EC289",
  "this.overlay_654ABB66_7CC2_998D_41DA_34F2A6A04442",
  "this.overlay_618210DB_7CC1_E8BA_41D2_24F618C89D7F",
  "this.overlay_62FC8820_7CC1_E785_41CA_A9F0B5B8A4B3",
  "this.popup_6FACE8F5_7CC2_988E_41D1_BFB07CD810B8",
  "this.popup_69EC0FF7_7CC1_F88A_41DE_3AD336F26615",
  "this.popup_6B5A0DC2_7CC2_988A_41BD_D4BD75A16ACE",
  "this.popup_65418B37_7CC2_998B_41CC_BE7280ED463B",
  "this.popup_62E16800_7CC1_E786_41D1_A7A8C41C1D10",
  "this.popup_55449B6D_7D43_799E_41BE_32FF20E0245A",
  "this.popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB",
  "this.popup_5695574B_7D41_A99A_41D7_21C661FD19EE",
  "this.popup_566B7F84_7D46_988E_41BE_73EF3146CE56",
  "this.popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A",
  "this.popup_57126416_7DCF_AF8A_41AA_AB184A6512A2",
  "this.overlay_53E71730_7DCF_6986_41D6_4DC2CFB5500F",
  "this.overlay_53CA4D5B_7DC1_79BB_41C1_B94F0A3E38C9",
  "this.overlay_5310ED82_7DC1_9885_41C4_856AB9E61AE4",
  "this.popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F",
  "this.overlay_46DCD89A_7CBE_B885_41CC_EB77083D836F",
  "this.overlay_5650EBC5_7DCE_988E_41D6_F96DF7A5D377",
  "this.overlay_956F425A_859C_2D9E_41CB_FA227B0B6A49",
  "this.overlay_90D59FE5_8584_F2AA_41DA_B7EA4AE268D6",
  "this.overlay_9D6FBFC1_859C_72EA_41D1_D9015DFF79FA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -48.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 44.34,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
   "distance": 1
  },
  {
   "yaw": 178.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -5.71,
   "panorama": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
   "distance": 1
  },
  {
   "yaw": 62.78,
   "class": "AdjacentPanorama",
   "backwardYaw": -27.46,
   "panorama": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
   "distance": 1
  },
  {
   "yaw": -0.42,
   "class": "AdjacentPanorama",
   "backwardYaw": 171.97,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "distance": 1
  },
  {
   "yaw": -65.25,
   "class": "AdjacentPanorama",
   "backwardYaw": -152.68,
   "panorama": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
   "distance": 1
  },
  {
   "yaw": 49.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -42.33,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "duration": 1000,
 "id": "effect_64BEC982_7CC6_988A_41BA_EC318ACECEE7",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": -137.88,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 27.76,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.23,
    "pitchSpeed": 48.03,
    "easing": "cubic_in_out",
    "yawSpeed": 95.49
   },
   {
    "targetYaw": -4.65,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 33.29,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 61.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 75.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.69,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -172.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -134.03,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 32.53,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B864C25_1F2C_3FA5_41BD_C0EDD7E8481A"
},
{
 "displayOriginPosition": {
  "yaw": -69.81,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": -69.81,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 36.47
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -106.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -59.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 16.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 49.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 11.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 2500,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetHfov": 75,
   "targetStereographicFactor": 0,
   "targetPitch": 36.47
  }
 ]
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 102.69,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_1.jpg",
    "width": 653,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.03,
 "hideEasing": "cubic_out",
 "hfov": 0.94
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "duration": 1000,
 "id": "effect_907FBE4C_859F_F5FB_418B_39BD5CD908E7",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Punto 4",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "x": 1380.4,
   "class": "PanoramaMapLocation",
   "y": 734.1,
   "angle": -29.65
  }
 ],
 "id": "panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
 "overlays": [
  "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA_tcap0",
  "this.overlay_63D96A48_7321_0F2E_41C0_1245E822A059",
  "this.overlay_5C631E87_7448_C331_41D6_64719DB78C84",
  "this.overlay_5312F7DF_744F_C0D2_41CC_6C870B4BBC6C",
  "this.overlay_58341EA3_744F_4372_41C3_C201BEC31CDE",
  "this.overlay_620C0D36_7758_A23B_41D4_FADAD1FDBE4A",
  "this.overlay_63901FC7_7748_DE58_41DD_083C1207EABE",
  "this.overlay_6221242E_7749_E228_41B5_8897D89554B5",
  "this.overlay_6D1C24EE_78B8_E22B_4195_61F08AD2EE19"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -121.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 120.87,
   "panorama": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
   "distance": 1
  },
  {
   "yaw": 42.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.79,
   "panorama": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
   "distance": 1
  },
  {
   "yaw": -149.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -36.43,
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_t.jpg",
 "class": "Panorama",
 "hfovMax": 100
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 3.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 35.25,
 "hideEasing": "cubic_out",
 "hfov": 2.24
},
{
 "initialPosition": {
  "yaw": 143.57,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -69.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.47,
    "pitchSpeed": 88.01,
    "easing": "cubic_in_out",
    "yawSpeed": 175.84
   },
   {
    "targetYaw": -106.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -59.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 16.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 49.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 11.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0AC4DD99_1F2C_396A_41B6_90A0478D2537"
},
{
 "initialPosition": {
  "yaw": -50.65,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -9.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.06,
    "pitchSpeed": 22.85,
    "easing": "cubic_in_out",
    "yawSpeed": 44.9
   },
   {
    "targetYaw": -9.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -9.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 58.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 145.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -121.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -53.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0CAD9AA3_1F2C_3B5D_41A1_51EB6A5C39D4"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 98.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_55449B6D_7D43_799E_41BE_32FF20E0245A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 17.67,
 "hideEasing": "cubic_out",
 "hfov": 2.19
},
{
 "levels": [
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_0.jpg",
   "width": 5845,
   "class": "ImageResourceLevel",
   "height": 3897
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_5E2525DB_7CC1_A8BA_41B9_FEEB5D193E7A",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 19.79,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.69,
 "hideEasing": "cubic_out",
 "hfov": 1.04
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 10.32,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": -41.07,
 "hideEasing": "cubic_out",
 "hfov": 1.61
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 23.47,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": -30.22,
 "hideEasing": "cubic_out",
 "hfov": 1.85
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 178.7,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_483359CE_75BB_4132_41C8_2385EBA46B9F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_3.jpg",
    "width": 652,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.77,
 "hideEasing": "cubic_out",
 "hfov": 1.34
},
{
 "levels": [
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5402CBB3_7D46_988A_41D1_F4BE91359572",
 "class": "ImageResource"
},
{
 "thumbnailUrl": "media/video_8D1816BF_835D_0EB5_41C0_020C81D2D133_t.jpg",
 "scaleMode": "fit_inside",
 "width": 856,
 "label": "Francisco-Solano-L",
 "loop": false,
 "id": "video_8D1816BF_835D_0EB5_41C0_020C81D2D133",
 "class": "Video",
 "height": 1000,
 "video": {
  "width": 856,
  "mp4Url": "media/video_8D1816BF_835D_0EB5_41C0_020C81D2D133.mp4",
  "class": "VideoResource",
  "height": 1000
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 29.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.72,
 "hideEasing": "cubic_out",
 "hfov": 1.42
},
{
 "levels": [
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 1788
  },
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1220
  },
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 610
  },
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 305
  }
 ],
 "id": "ImageResource_4EE35054_7D43_A78D_4194_A14BEA529F2E",
 "class": "ImageResource"
},
{
 "duration": 1000,
 "id": "effect_6EE4211A_7948_A3E8_41D5_0FDB9A23EF72",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -34.79,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 57.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 0.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.04,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 56.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.22,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.42,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -38.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.18,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 31.28,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -5.72,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 41.33,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.89,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 77.89,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 16.41,
 "hideEasing": "cubic_out",
 "hfov": 1.76
},
{
 "duration": 1000,
 "id": "effect_6B5BAFD5_7CC6_988F_41D8_4DCF040E46DD",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_4EEC705B_7D43_A7BB_41B2_AA05D122AFD1",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_0.jpg",
   "width": 6000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_5E2595DB_7CC1_A8BA_41BE_540427022E22",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 169.94,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 73.67,
 "hideEasing": "cubic_out",
 "hfov": 1.34
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E.ogg",
  "mp3Url": "media/audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E.mp3"
 },
 "data": {
  "label": "Himno Nacional del Paraguay-p-59Cb9duyE"
 }
},
{
 "initialPosition": {
  "yaw": -130.7,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0C9AAADE_1F2C_38E7_41BD_DB08C00E26CB"
},
{
 "initialPosition": {
  "yaw": -1.26,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 2.51
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_camera"
},
{
 "levels": [
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5407FBBB_7D46_98FA_41D2_6D1230ED05FF",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_0.jpg",
   "width": 5885,
   "class": "ImageResourceLevel",
   "height": 3923
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_5E2125EB_7CC1_A89A_41D7_E9962AEEA7B8",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 5250
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_1.jpg",
   "width": 2340,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_2.jpg",
   "width": 1170,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_3.jpg",
   "width": 585,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_4.jpg",
   "width": 292,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_54085BC7_7D46_9889_41CD_33EED883FBC8",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 30.02,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.29,
 "hideEasing": "cubic_out",
 "hfov": 1.28
},
{
 "initialPosition": {
  "yaw": -0.5,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 2.51
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 29.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.97,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 103.88,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 175.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 47.79,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -140.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 45.03,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -108.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.9,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -68.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -3.45,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -71.72,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 29.46,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -30.51,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.5,
 "hideEasing": "cubic_out",
 "hfov": 1.42
},
{
 "initialPosition": {
  "yaw": 179.58,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 2.51,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -2.39,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.48,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 28.26,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 11.62,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.85,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 100.36,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.66,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 141.06,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.24,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 34.23,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -129.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 49.05,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -102.12,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 18.65,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -73.23,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 7.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -30.02,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0966DDF4_1F2C_38BA_41B0_B0696482CF12"
},
{
 "closeButtonBackgroundColor": [],
 "shadowHorizontalLength": 3,
 "id": "window_653F64CA_7748_E268_41D1_CBE77F2670A8",
 "backgroundOpacity": 1,
 "width": 1200,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 800,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "title": "Historia del Pante\u00f3n",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_653B74D3_7748_E278_41B9_7B961B2A4E9D"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "2vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "titlePaddingLeft": 5,
 "layout": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window2883"
 },
 "titleFontFamily": "Arial"
},
{
 "duration": 1000,
 "id": "effect_482879CD_75BB_4136_41D7_757E609EE41F",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "duration": 1000,
 "id": "effect_6B1AB4C2_7CC1_688A_41C0_97C126E67E6D",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 2000
  },
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_4E8EA046_7D43_A78D_41D6_6779A0D71D89",
 "class": "ImageResource"
},
{
 "duration": 1000,
 "id": "effect_6BA335F7_7CC7_A88B_41DB_CCA2711C24E8",
 "class": "FadeInEffect",
 "easing": "linear"
},
{
 "levels": [
  {
   "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_3D422A6F_7F46_9B9A_41DF_1CDCABD2E350",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -9.19,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_3.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": -15.51,
 "hideEasing": "cubic_out",
 "hfov": 2.06
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -0.63,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6EBEED2B_78DF_E228_419E_876D9449DEE3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_3.jpg",
    "width": 652,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.85,
 "hideEasing": "cubic_out",
 "hfov": 0.99
},
{
 "levels": [
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_4207C9CD_7DCE_B89E_41CF_CC1568025D16",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": -53.23,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 97.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.55,
    "pitchSpeed": 108,
    "easing": "cubic_in_out",
    "yawSpeed": 216
   },
   {
    "targetYaw": 113.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 115.44,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -2.2,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0AA68D41_1F2C_39DD_417D_3A5E570A792F"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 107.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_57BD21E6_7D42_A88A_41DD_386A14969465",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 40.6,
 "hideEasing": "cubic_out",
 "hfov": 1.63
},
{
 "levels": [
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_0.jpg",
   "width": 5845,
   "class": "ImageResourceLevel",
   "height": 3897
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_5E2545DB_7CC1_A8BA_41D2_EDDFD86F9268",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -66.16,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5695574B_7D41_A99A_41D7_21C661FD19EE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 41.48,
 "hideEasing": "cubic_out",
 "hfov": 1.6
},
{
 "initialPosition": {
  "yaw": -8.03,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -9.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -12.06,
    "pitchSpeed": 7.2,
    "easing": "cubic_in_out",
    "yawSpeed": 13.46
   },
   {
    "targetYaw": -9.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -9.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 58.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 145.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -121.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -53.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D137F60_1F2C_39DA_418A_C40B70BC9BFE"
},
{
 "initialPosition": {
  "yaw": -9.55,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": -12.06
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -9.67,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -9.17,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 41.77,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -8.92,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 58.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 36.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.61,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 77.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 16.14,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 145.08,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.16,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.35,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -120.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.49,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -121.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -53.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.13,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_camera"
},
{
 "initialPosition": {
  "yaw": 137.67,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 56.89,
    "easing": "cubic_in_out",
    "yawSpeed": 113.3
   },
   {
    "targetYaw": -22.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.34,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -31.84,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 22.99,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": -32.6,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 68.21,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0.31,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 72.48,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.74,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 14.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 178.24,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 12.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.14,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 19.41,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -31.78,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -28.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.86,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.13,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 8.1,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 30.27,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 9.11,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.22,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 15.39,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0D7EBFA0_1F2C_395A_41BE_657F9ABD5753"
},
{
 "levels": [
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_0.jpg",
   "width": 5844,
   "class": "ImageResourceLevel",
   "height": 3896
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_1.jpg",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_2.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_3.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_4.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_5E21E5EB_7CC1_A89A_41D7_4415EB2FC698",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 5250
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_1.jpg",
   "width": 2340,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_2.jpg",
   "width": 1170,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_3.jpg",
   "width": 585,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_4.jpg",
   "width": 292,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_5403ABB3_7D46_988A_41B7_B5688CCF9672",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 69.83,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_3.jpg",
    "width": 654,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.17,
 "hideEasing": "cubic_out",
 "hfov": 1.2
},
{
 "initialPosition": {
  "yaw": 52.06,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -69.81,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 36.47,
    "pitchSpeed": 52.13,
    "easing": "cubic_in_out",
    "yawSpeed": 103.74
   },
   {
    "targetYaw": -106.89,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.67,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -106.64,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -59.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 4.58,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.55,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.36,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.3,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.5,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -0.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 24.68,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 16.96,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 6.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 49.11,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.59,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 11.93,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 48.55,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -35.05,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 1.32,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_0B38BB51_1F2C_39FD_4195_94C7270D37A9"
},
{
 "initialPosition": {
  "yaw": -2.01,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 1.51
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 15.45,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 10.87,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 20.73,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 33.98,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 55.9,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 32.47,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 70.47,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.82,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 102.62,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 43.27,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 101.87,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 13.88,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 114.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 20.16,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 120.71,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 3.33,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_camera"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -106.35,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 14.12,
 "hideEasing": "cubic_out",
 "hfov": 2.08
},
{
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "levels": [
  {
   "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_0.jpg",
   "width": 1226,
   "class": "ImageResourceLevel",
   "height": 1920
  },
  {
   "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_1.jpg",
   "width": 653,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_2.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_3D3B8A66_7F46_9B8A_41D3_0C5D1807C52C",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4711
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_1.jpg",
   "width": 2608,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_2.jpg",
   "width": 1304,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_3.jpg",
   "width": 652,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_4.jpg",
   "width": 326,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_37B07473_75C8_C7D2_41D7_57FF2264C800",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -29.9,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_3.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 9.31,
 "hideEasing": "cubic_out",
 "hfov": 1.46
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 6.67,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_572876B8_7D41_E885_41D2_B5C07F2528F0",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 35.4,
 "hideEasing": "cubic_out",
 "hfov": 2.68
},
{
 "initialPosition": {
  "yaw": -30.85,
  "hfov": 75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -1.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 22.36,
    "pitchSpeed": 8.45,
    "easing": "cubic_in_out",
    "yawSpeed": 15.97
   },
   {
    "targetYaw": 76.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 38.75,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 131.77,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 25.44,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 161.91,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": 177.74,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 5.09,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -161.41,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 40.26,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -119.46,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 52.07,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -77.5,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 23.43,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   },
   {
    "targetYaw": -1.63,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 21.17,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "manualZoomSpeed": 2,
 "automaticZoomSpeed": 10,
 "id": "camera_09055DD5_1F2C_38FA_41BD_564968696568"
},
{
 "levels": [
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4500
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_1.jpg",
   "width": 2730,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_2.jpg",
   "width": 1365,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_3.jpg",
   "width": 682,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_4.jpg",
   "width": 341,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "id": "ImageResource_422B29BE_7DCE_B8FA_41CC_273190D1929F",
 "class": "ImageResource"
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "16px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "height": "12.832%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 5,
 "width": 488,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Image_6643B8C0_7458_CF2F_41D6_027A16ABEDA9",
  "this.Container_667BA06F_745B_5FF1_41D8_E0F77A6A58E8"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": 5,
 "scrollBarWidth": 10,
 "height": 116,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--INFO"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CONTACT"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_49CD1078_7479_3FDE_4199_990D6D60F6FA",
 "left": "0%",
 "children": [
  "this.Container_49CDB077_7479_3FD2_41D0_44DA14F8F2C8",
  "this.Container_49CDF077_7479_3FD2_4190_98C2D896BD4C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--JF Estigarribia"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_72DFDA82_7CC6_B885_41B9_702B6A474553",
 "left": "0%",
 "children": [
  "this.Container_723E77D5_7CC6_A88F_41C6_039A8FC74C78",
  "this.Container_73FFBCC0_7CC6_9886_41CE_B623B6A569CA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--FS L\u00f3pez"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93",
 "left": "0%",
 "children": [
  "this.Container_73BB904D_7CC2_A79F_41C9_B53B537DE301",
  "this.Container_737EF99A_7CC2_B8BA_41B0_80F380D34B7C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--CA L\u00f3pez"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_940A84D7_859C_5696_41D3_DFA64C65F768",
 "left": "0%",
 "children": [
  "this.Container_97908A47_859C_FDF6_41D8_D72B0E328DEA",
  "this.Container_97BDD24A_8585_EDFE_41D8_D9425C5F2B6D"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--JGR de Francia"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9",
 "left": "0%",
 "children": [
  "this.Container_901F26D0_8584_72EA_41C6_CBE72D92F1D6",
  "this.Container_902D1456_8584_F596_41B1_320B5BD80C0A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--Beato Roque"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_904F4090_8587_ED6A_41DB_8F0D83FA0228",
 "left": "0%",
 "children": [
  "this.Container_93840CAA_8584_56BE_41D0_201723BE99F9",
  "this.Container_926F4D60_8584_77AA_41C6_92D935D1898E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, false, 0, null, null, false)",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--Juan Pablo II"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "gap": 10
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "UIComponent",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent4673"
 },
 "shadow": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "class": "ZoomImage",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage4674"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconHeight": 20,
 "paddingLeft": 5,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "class": "CloseButton",
 "top": 10,
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton4675"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_79C4A72F_7748_AE29_41D5_D8131A239EC2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.67vmin;\">Ubicado en el centro de Am\u00e9rica del Sur, el Paraguay es actualmente un pa\u00eds mediterr\u00e1neo, de 406.752 Km2. y un poco m\u00e1s de 5.000.000 de habitantes; distante 1448 Kms. del Oc\u00e9ano Atl\u00e1ntico. Al norte limita con Bolivia, al sureste y sur oeste con Argentina y al este y norte con Brasil.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.93vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.02vmin;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.67vmin;\">Habitado desde tiempos remotos por numerosas parcialidades ind\u00edgenas, en el a\u00f1o 1524, toma otro rumbo su historia milenaria con la llegada a sus tierras, del primer europeo; el espa\u00f1ol Alejo Garc\u00eda, quien ingres\u00f3 desde el Atl\u00e1ntico, por la isla de Santa Catarina, Brasil. Tres a\u00f1os m\u00e1s tarde lleg\u00f3 por agua, Sebasti\u00e1n Gaboto, y en 1537 el Capit\u00e1n Juan de Salazar de Espinoza fund\u00f3 la Casa Fuerte de la Asunci\u00f3n. A partir de entonces se convirti\u00f3 en el centro de la conquista espa\u00f1ola, siendo sede de operaciones para expediciones hacia las sierras del Plata. En los antiguos mapas figuraba con el nombre de \u00abParaguay, Provincia Gigante de las Indias\u00bb, debido a su gran extensi\u00f3n. En el a\u00f1o 1542 el Rey de Espa\u00f1a nombr\u00f3 a Alvar N\u00fa\u00f1ez Cabeza de Vaca, Gobernador del Paraguay; los habitantes descontentos con su gesti\u00f3n lo destituyen en 1544. En su lugar designaron a Domingo Mart\u00ednez de Irala, adquiriendo los pobladores, con autorizaci\u00f3n del Rey, el derecho a nominar su propio gobernador, atribuci\u00f3n retenida hasta 1735.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText2884"
 },
 "shadow": false
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -162.67,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 37.75,
 "bleaching": 0.7,
 "id": "overlay_631F5239_732F_3F6E_41B5_9678C09F1CA2"
},
{
 "bleachingDistance": 0.4,
 "yaw": 145.33,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 38,
 "bleaching": 0.7,
 "id": "overlay_63EC6BF1_732F_0CE1_4171_721515DC013C"
},
{
 "bleachingDistance": 0.4,
 "yaw": 74.24,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 68.39,
 "bleaching": 0.7,
 "id": "overlay_63F4827C_732F_1FE6_41BB_F64B4E68B7DF"
},
{
 "bleachingDistance": 0.4,
 "yaw": -92.07,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 68.14,
 "bleaching": 0.7,
 "id": "overlay_63C618C0_732F_0B1F_41C9_5F3690E00421"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.05,
   "yaw": -120.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_23_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 5.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_23_0.png",
      "width": 616,
      "class": "ImageResourceLevel",
      "height": 964
     }
    ]
   },
   "pitch": 5.27,
   "yaw": -120.27,
   "distance": 50
  }
 ],
 "id": "overlay_527AA054_7DC2_A78E_41D9_0F6F9AB17A85",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.46,
   "yaw": -127.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D747778_7323_05EE_41DC_97522F54C128, this.camera_09055DD5_1F2C_38FA_41BD_564968696568); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7141705_FB8E_5DF5_4159_B2CCDD102E4B",
   "pitch": -7.1,
   "hfov": 13.46,
   "yaw": -127.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4547CAF1_74C9_C0EE_41B8_D700698A4B8D",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.84,
   "yaw": 109.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB, this.camera_0946AE11_1F2C_3B7A_41B2_2B8E949A88CB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D713E705_FB8E_5DF5_41C7_6471F85D6F36",
   "pitch": -7.14,
   "hfov": 9.84,
   "yaw": 109.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4597D804_74CB_4F37_41D4_D30847642505",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.13,
   "yaw": 129.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_09B93E30_1F2C_3BBA_41B1_A9BEE35DA166); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D713B706_FB8E_5DF7_41C1_E758355F8D84",
   "pitch": -15.72,
   "hfov": 12.13,
   "yaw": 129.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_595CF13E_74C8_C153_41BE_B8902DA3E0BE",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.9,
   "yaw": 171.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_0966DDF4_1F2C_38BA_41B0_B0696482CF12); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7130706_FB8E_5DF7_41E0_6CAE60438AB2",
   "pitch": -9.04,
   "hfov": 9.9,
   "yaw": 171.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5A0B24BA_74C9_4752_41A0_F26068F5677B",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.59,
   "yaw": -147.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_09263DB8_1F2C_38AA_41BE_51EB11B99878); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7145706_FB8E_5DF7_41E6_65FDF30DC74C",
   "pitch": -9.64,
   "hfov": 17.59,
   "yaw": -147.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_443486C1_74C9_432E_41D1_AF766A53550B",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.9,
   "yaw": -118.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_6EE4211A_7948_A3E8_41D5_0FDB9A23EF72, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7142706_FB8E_5DF7_41C2_FD4C427E7E4E",
   "pitch": 10.85,
   "hfov": 1.9,
   "yaw": -118.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6EF7314C_7948_A268_41CF_44989850F8EB",
 "data": {
  "label": "JFEstigarribia info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.33,
   "yaw": -120.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 5.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_6EFB311C_7948_A3E8_41D6_721F2868B881, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.33,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_7_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ]
   },
   "pitch": 5.76,
   "yaw": -120.54,
   "distance": 50
  }
 ],
 "id": "overlay_6EF7C14C_7948_A268_41B1_8F488E12A8DE",
 "data": {
  "label": "JFEstigarribia foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.06,
   "yaw": -9.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E2125EB_7CC1_A89A_41D7_E9962AEEA7B8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_8_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": -15.51,
   "yaw": -9.19,
   "distance": 50
  }
 ],
 "id": "overlay_6F138C5B_7CC2_FFBB_41CA_5A6DB7C54CE8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.14,
   "yaw": -9.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6B81FAD8_7CC2_B886_4192_33E86037436A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E2145EB_7CC1_A89A_41A5_60C47CFF5D83, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_9_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": -3.27,
   "yaw": -9.1,
   "distance": 50
  }
 ],
 "id": "overlay_692CBB65_7CC3_798F_41C8_2BBA042E542F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.2,
   "yaw": -17.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 55.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E21E5EB_7CC1_A89A_41D7_4415EB2FC698, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_10_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 55.91,
   "yaw": -17.77,
   "distance": 50
  }
 ],
 "id": "overlay_68A9C086_7CC2_A88D_41D3_5F0383B1E29E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.63,
   "yaw": 107.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 40.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57BD21E6_7D42_A88A_41DD_386A14969465, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4EE00053_7D43_A78B_4190_49F82A4ABB2E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_11_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 40.6,
   "yaw": 107.53,
   "distance": 50
  }
 ],
 "id": "overlay_69B247F8_7CC1_6886_41D3_84F4B57D4655",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.58,
   "yaw": -113.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 42.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5133DA93_7D43_788A_4195_473DB2431260, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4EE35054_7D43_A78D_4194_A14BEA529F2E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_12_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 42.61,
   "yaw": -113.78,
   "distance": 50
  }
 ],
 "id": "overlay_68F59811_7CC7_6786_41C3_6BCA7112D468",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.11,
   "yaw": -160.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 28
     }
    ]
   },
   "pitch": 5.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_13_0.png",
      "width": 675,
      "class": "ImageResourceLevel",
      "height": 1187
     }
    ]
   },
   "pitch": 5.64,
   "yaw": -160.99,
   "distance": 50
  }
 ],
 "id": "overlay_6B3F2B44_7CC1_998E_41C6_453684498497",
 "data": {
  "label": "CA Lopez Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.22,
   "yaw": -158.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6B1AB4C2_7CC1_688A_41C0_97C126E67E6D, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7120707_FB8E_5DF5_41C6_05CECC20E575",
   "pitch": 13.06,
   "hfov": 2.22,
   "yaw": -158.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B1784D2_7CC1_688A_41C5_1693954F6213",
 "data": {
  "label": "CA Lopez info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.99,
   "yaw": -161.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 7.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_540B4BC2_7D46_988A_41D4_0785272F4B3B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_15_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": 7.35,
   "yaw": -161.33,
   "distance": 50
  }
 ],
 "id": "overlay_64DBD141_7CC1_A986_41DC_631A13120D60",
 "data": {
  "label": "CA Lopez foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.6,
   "yaw": -95.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ]
   },
   "pitch": 9.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_16_0.png",
      "width": 1115,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 9.19,
   "yaw": -95.85,
   "distance": 50
  }
 ],
 "id": "overlay_657C85EA_7CC1_6885_41D9_24CDD67A7117",
 "data": {
  "label": "Beato Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.93,
   "yaw": -95.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 14.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_54273946_7D4F_B98A_41DA_F36DBD50FE18, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_540ACBC3_7D46_988A_41C9_13CC83B4F284, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.93,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_17_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ]
   },
   "pitch": 14.96,
   "yaw": -95.38,
   "distance": 50
  }
 ],
 "id": "overlay_654B3F22_7CC2_B985_41C5_7FB184F1EC10",
 "data": {
  "label": "Beato Foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.64,
   "yaw": 144.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_18_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 6.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_18_0.png",
      "width": 817,
      "class": "ImageResourceLevel",
      "height": 1297
     }
    ]
   },
   "pitch": 6.05,
   "yaw": 144.44,
   "distance": 50
  }
 ],
 "id": "overlay_6758C316_7CC3_698A_41D0_522DC7BF8F93",
 "data": {
  "label": "JGR de Francia Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.13,
   "yaw": 144.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_19_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_540A5BC4_7D46_988E_41C8_DB11B1FFAF26, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_19_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 6.76,
   "yaw": 144.29,
   "distance": 50
  }
 ],
 "id": "overlay_62A48D5F_7CCE_99BA_41D2_0452C645DA8B",
 "data": {
  "label": "JGR de Francia Foto"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -161.33,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6B25F113_7CC1_A98B_41D1_39883E487194",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B25F113_7CC1_A98B_41D1_39883E487194_0_1.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.35,
 "hideEasing": "cubic_out",
 "hfov": 1.99
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -95.38,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6541DF02_7CC2_B98A_41C5_0C282491D2C2",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6541DF02_7CC2_B98A_41C5_0C282491D2C2_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 14.96,
 "hideEasing": "cubic_out",
 "hfov": 2.93
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 144.29,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_62D1ED37_7CCE_998A_41DD_980203AD3DEF",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62D1ED37_7CCE_998A_41DD_980203AD3DEF_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.76,
 "hideEasing": "cubic_out",
 "hfov": 2.13
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 77.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_20_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_420A19D6_7DCE_B88A_41D1_A3FEA33A687B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_20_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": 16.41,
   "yaw": 77.89,
   "distance": 50
  }
 ],
 "id": "overlay_515F8C99_7DC2_9886_41D7_61753BD493E0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.36,
   "yaw": 78.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_21_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 11.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_21_0.png",
      "width": 1245,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 11.54,
   "yaw": 78.37,
   "distance": 50
  }
 ],
 "id": "overlay_57957905_7DC2_998E_41DA_C37C84E61268",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 103.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_22_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": 5.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_22_0.png",
      "width": 772,
      "class": "ImageResourceLevel",
      "height": 1109
     }
    ]
   },
   "pitch": 5.79,
   "yaw": 103.11,
   "distance": 50
  }
 ],
 "id": "overlay_52F72CF9_7DC3_F886_41D8_354B2AF8FF85",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.63,
   "yaw": 104.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_24_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71F4709_FB8E_5DFD_41E3_BA231B062270",
   "pitch": 10.74,
   "hfov": 1.63,
   "yaw": 104.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4676159A_7CBF_A8BA_41D9_B2D0A31AE00E",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.38,
   "yaw": 102.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_25_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 6.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_3D3B8A66_7F46_9B8A_41D3_0C5D1807C52C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_25_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": 6.03,
   "yaw": 102.69,
   "distance": 50
  }
 ],
 "id": "overlay_44555707_7CBE_E98A_4198_6FB953D13905",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.11,
   "yaw": 145.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_26_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71EE709_FB8E_5DFD_41E0_E339B619A5EB",
   "pitch": 12.91,
   "hfov": 2.11,
   "yaw": 145.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_96276FEF_858C_32B6_41D0_781F1DB047BE",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.26,
   "yaw": -92.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_27_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_907FBE4C_859F_F5FB_418B_39BD5CD908E7, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71EB709_FB8E_5DFD_41D4_4D7691CA049F",
   "pitch": 28.56,
   "hfov": 3.26,
   "yaw": -92.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_907AFE62_859F_F5AE_41C9_1550C07F1298",
 "data": {
  "label": "Info Beato"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.26,
   "yaw": 79.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_28_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_921B3444_8584_55EA_41D5_BC5AE0C58944, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71E770A_FB8E_5DFF_41E9_3EA70C4A417A",
   "pitch": 27.69,
   "hfov": 3.26,
   "yaw": 79.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_92008456_8584_5596_41AB_DAD576ACB00B",
 "data": {
  "label": "Info Juan Pablo II"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 27.76,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 40.26,
 "bleaching": 0.7,
 "id": "overlay_63F60DAD_732F_0561_41AF_4D254467E807"
},
{
 "bleachingDistance": 0.4,
 "yaw": 164.42,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 47.04,
 "bleaching": 0.7,
 "id": "overlay_63CC16EF_732F_04E1_41CB_331CCC76E9B0"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.95,
   "yaw": 178.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_19_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 8.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_19_0.png",
      "width": 952,
      "class": "ImageResourceLevel",
      "height": 1506
     }
    ]
   },
   "pitch": 8.56,
   "yaw": 178.91,
   "distance": 50
  }
 ],
 "id": "overlay_53BD8953_7DC1_998A_41CF_5DE92D726EF0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.71,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_0BA5BBFD_1F2C_38A5_41BA_2BA51F4E53A2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71C570A_FB8E_5DFF_41B8_AAC19E10DE6B",
   "pitch": -7.22,
   "hfov": 13.71,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_586D65A0_74C8_C16E_41DB_14CF96C489C8",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.76,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_0B45FBCE_1F2C_38E7_41BB_690696BE552C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71C370B_FB8E_5DFD_41EA_23D3CE1BA4DB",
   "pitch": -10.74,
   "hfov": 18.76,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_595373DB_74C9_C0D2_41AA_AC044C0AED8F",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.9,
   "yaw": -53.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_0B047B6E_1F2C_39A7_417A_1AE0EA0AE09C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71B870B_FB8E_5DFD_41E4_6B866CF793C2",
   "pitch": -8.6,
   "hfov": 15.9,
   "yaw": -53.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_595ED036_74C9_5F52_41D4_E5260BFB43A6",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.58,
   "yaw": -179.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D747778_7323_05EE_41DC_97522F54C128, this.camera_0B64EBA0_1F2C_395B_41A9_9A7F044C42F6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71B570B_FB8E_5DFD_41C9_EE2B7A0E3C81",
   "pitch": -13.63,
   "hfov": 17.58,
   "yaw": -179.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5AFB6EF8_74D7_40DE_41C9_742ECC774634",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -28.76,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 63.12,
 "bleaching": 0.7,
 "id": "overlay_4EA59A9E_74C9_4352_41C6_955F836F751F"
},
{
 "bleachingDistance": 0.4,
 "yaw": -37.56,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 42.27,
 "bleaching": 0.7,
 "id": "overlay_471EE849_74C8_CF31_41DA_A1F34A8CB675"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.89,
   "yaw": -178.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_482879CD_75BB_4136_41D7_757E609EE41F, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D71AF70C_FB8E_5DFB_41E1_FD2A0F716C17",
   "pitch": 16.66,
   "hfov": 2.89,
   "yaw": -178.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_483C7A05_75BB_4336_4178_9B610604F6B3",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.7,
   "yaw": 178.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 9.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_483359CE_75BB_4132_41C8_2385EBA46B9F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_483349CE_75BB_4132_41CC_BB9AF1EF6966, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_6_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 9.77,
   "yaw": 178.7,
   "distance": 50
  }
 ],
 "id": "overlay_483C6A05_75BB_4336_41A1_EA4959113365",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.25,
   "yaw": -170.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 54.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4EE98058_7D43_A785_4191_69DE0063FA42, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_7_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 54.16,
   "yaw": -170.13,
   "distance": 50
  }
 ],
 "id": "overlay_6F835B9F_7CC1_F8BA_41AF_DD8E58BBB5F1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.99,
   "yaw": 104.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": 12.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 28.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_8_0.png",
      "width": 1391,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 12.76,
   "yaw": 104.62,
   "distance": 50
  }
 ],
 "id": "overlay_6B5D9D75_7CC3_998E_41D3_263894A6698F",
 "data": {
  "label": "CA Lopez Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.64,
   "yaw": 107.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6B576BFF_7CC1_987A_41D4_F423817BBAB3, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D719E70C_FB8E_5DFB_41B5_211B16937FBC",
   "pitch": 27.26,
   "hfov": 3.64,
   "yaw": 107.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B4C7C0F_7CC1_9F9B_41D9_E10843E21C7D",
 "data": {
  "label": "CA Lopez info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.71,
   "yaw": 103.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_10_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_55530E52_7D41_7B85_41D3_D21BAEE45E56, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_54085BC7_7D46_9889_41CD_33EED883FBC8, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_10_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ]
   },
   "pitch": 15.35,
   "yaw": 103.81,
   "distance": 50
  }
 ],
 "id": "overlay_6B739F5E_7CFE_F9BD_41D3_5B5544532AC2",
 "data": {
  "label": "CA Lopez foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.94,
   "yaw": -105.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_11_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 11.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_11_0.png",
      "width": 1249,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 11.53,
   "yaw": -105.52,
   "distance": 50
  }
 ],
 "id": "overlay_653F1755_7CC2_A98E_41AA_FE32D6513AB4",
 "data": {
  "label": "Beato Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.98,
   "yaw": -106.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_54097BC9_7D46_9886_41C3_47E3B4083276, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_12_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 178
     }
    ]
   },
   "pitch": 14.12,
   "yaw": -106.35,
   "distance": 50
  }
 ],
 "id": "overlay_65415B61_7CC1_B986_41C8_3BB63B98135A",
 "data": {
  "label": "Beato Foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.93,
   "yaw": 29.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": 5.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.93,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_13_0.png",
      "width": 832,
      "class": "ImageResourceLevel",
      "height": 1453
     }
    ]
   },
   "pitch": 5.1,
   "yaw": 29.1,
   "distance": 50
  }
 ],
 "id": "overlay_670A89E6_7CC3_788A_41CB_DD2C6EA7E9E0",
 "data": {
  "label": "JGR de Francia Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.12,
   "yaw": 29.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5408FBCA_7D46_989A_41DF_112EBEA8F847, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_14_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 7.72,
   "yaw": 29.62,
   "distance": 50
  }
 ],
 "id": "overlay_62F4BF37_7CCF_998A_41C9_FFA1EE8A34B9",
 "data": {
  "label": "JGR de Francia Foto"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -170.13,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6F8E3B80_7CC1_F885_41B0_913E3BAED8BD",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F8E3B80_7CC1_F885_41B0_913E3BAED8BD_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 54.16,
 "hideEasing": "cubic_out",
 "hfov": 1.25
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 103.81,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6B7D4F3E_7CFE_F9FA_41C0_34FE098A0293",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B7D4F3E_7CFE_F9FA_41C0_34FE098A0293_0_1.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 15.35,
 "hideEasing": "cubic_out",
 "hfov": 3.71
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -106.35,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_657A8B38_7CC1_B986_41DC_E13ED9FBF025",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_657A8B38_7CC1_B986_41DC_E13ED9FBF025_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 14.12,
 "hideEasing": "cubic_out",
 "hfov": 2.98
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 29.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_62E09F08_7CCF_9986_41B4_C612C7ED3D38",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62E09F08_7CCF_9986_41B4_C612C7ED3D38_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 7.72,
 "hideEasing": "cubic_out",
 "hfov": 2.12
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.24,
   "yaw": 3.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 35.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4EEC705B_7D43_A7BB_41B2_AA05D122AFD1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_15_0.png",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 147
     }
    ]
   },
   "pitch": 35.25,
   "yaw": 3.14,
   "distance": 50
  }
 ],
 "id": "overlay_56563579_7D41_A987_41D8_729A99DD2A83",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.15,
   "yaw": -0.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": 5.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_16_0.png",
      "width": 510,
      "class": "ImageResourceLevel",
      "height": 883
     }
    ]
   },
   "pitch": 5.04,
   "yaw": -0.54,
   "distance": 50
  }
 ],
 "id": "overlay_57C61ECA_7DC7_F89A_41D3_549241EF15C2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.12,
   "yaw": -30.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_421529DC_7DCE_B8BE_41D3_B3BEFE60A942, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_17_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 7.5,
   "yaw": -30.51,
   "distance": 50
  }
 ],
 "id": "overlay_50DB5142_7DC7_6985_41DA_5BEDCC86A515",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.82,
   "yaw": -30.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_18_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 6.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_18_0.png",
      "width": 771,
      "class": "ImageResourceLevel",
      "height": 1259
     }
    ]
   },
   "pitch": 6.18,
   "yaw": -30.46,
   "distance": 50
  }
 ],
 "id": "overlay_5697BC41_7DC6_9F86_41C0_098ED4A0BC90",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.52,
   "yaw": -0.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_20_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 4.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_47001AD2_7F42_9885_41B9_403B7B62136B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_3D43EA6E_7F46_9B9A_41D7_AF559CF80C20, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_20_0.png",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ]
   },
   "pitch": 4.33,
   "yaw": -0.54,
   "distance": 50
  }
 ],
 "id": "overlay_446E8442_7F41_AF85_41D0_88E2315CE5B0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.58,
   "yaw": 0.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_21_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D706970E_FB8E_5DF7_41ED_4F1B712E6BCE",
   "pitch": 8.72,
   "hfov": 1.58,
   "yaw": 0.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4570523C_7F42_EBFE_41D4_B187085228BD",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.65,
   "yaw": -76.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_22_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 39.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_45418F33_7F42_9989_41D5_287A481E4D1C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_3D422A6F_7F46_9B9A_41DF_1CDCABD2E350, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_22_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 39.45,
   "yaw": -76.08,
   "distance": 50
  }
 ],
 "id": "overlay_442D0A08_7F42_BB85_41A8_DC46CB68C14A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.89,
   "yaw": -67.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_23_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -7.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_44EC61FE_7F41_E87A_41C4_785622A36C4B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_3D416A70_7F46_9B86_41BC_7292B36898FB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_23_0.png",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ]
   },
   "pitch": -7.26,
   "yaw": -67.76,
   "distance": 50
  }
 ],
 "id": "overlay_46F858D3_7F41_B88B_41DA_2DFDEFFAC8F8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.47,
   "yaw": 31.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_24_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D705D70E_FB8E_5DF7_41DE_5E1D7D48554B",
   "pitch": 14.34,
   "hfov": 2.47,
   "yaw": 31.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9626F06E_858C_EDB6_41E0_89ED6D620AE2",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.32,
   "yaw": -103.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_25_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_90797384_859C_336A_41D7_FDEE4ABD0EFD, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D705470F_FB8E_5DF5_41CF_0C926F0AEC5A",
   "pitch": 27.73,
   "hfov": 3.32,
   "yaw": -103.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9075A395_859C_336A_41C0_AB3D240701BA",
 "data": {
  "label": "Info Beato"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.31,
   "yaw": -29.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_26_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_92172D15_858B_F76A_41D2_74125918E909, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D705770F_FB8E_5DF5_41E1_14FADB5F08F6",
   "pitch": 14.58,
   "hfov": 2.31,
   "yaw": -29.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_921A6D26_858B_F7B6_41D8_873B14B38D80",
 "data": {
  "label": "Info Juan Pablo II"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_tcap0",
 "angle": 118,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": -11.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534, this.camera_0CDE8B34_1F2C_39BB_41B0_2F65035B1BF8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D735F6F1_FB8E_5C2A_41D6_C441522A7318",
   "pitch": -4.21,
   "hfov": 7.52,
   "yaw": -11.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_54998E8E_7459_4333_41AA_37BC2D265505",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.2,
   "yaw": 149.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6, this.camera_0B38BB51_1F2C_39FD_4195_94C7270D37A9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73556F1_FB8E_5C2A_41EE_1D8510391A13",
   "pitch": -6.02,
   "hfov": 8.2,
   "yaw": 149.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_50F3AE8E_7459_4332_41BB_5E042B2313C9",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 120.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA, this.camera_0CC91B17_1F2C_3965_41B8_0C6E2A79A0B4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D73516F1_FB8E_5C2A_41E0_A3425EE0D0E3",
   "pitch": -1.03,
   "hfov": 6.8,
   "yaw": 120.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5509354F_7457_4132_41CE_168B78672CE8",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -165.93,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 85.73,
 "bleaching": 0.7,
 "id": "overlay_470916D9_74CB_40DE_41DC_40CDA3F4A04C"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -56.15,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 12.12,
 "bleaching": 0.7,
 "id": "overlay_63F7E689_732F_072E_41CA_1E7979FE244F"
},
{
 "bleachingDistance": 0.4,
 "yaw": -5.65,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 28.7,
 "bleaching": 0.7,
 "id": "overlay_63CCF6B3_732F_0762_41C2_B3FF56566B76"
},
{
 "bleachingDistance": 0.4,
 "yaw": -99.61,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 60.86,
 "bleaching": 0.7,
 "id": "overlay_630CC9AF_732F_0D62_41B6_24F2F7718ADB"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.35,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_21_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 3.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_21_0.png",
      "width": 576,
      "class": "ImageResourceLevel",
      "height": 890
     }
    ]
   },
   "pitch": 3.95,
   "yaw": -0.13,
   "distance": 50
  }
 ],
 "id": "overlay_4DC75064_7DCE_A78E_41BB_305E2AF9A88D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.14,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB, this.camera_0CE15AFB_1F2C_38AD_4172_03E28930F409); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72D9700_FB8E_5DEB_41DF_9ED4E500C104",
   "pitch": -20.29,
   "hfov": 14.14,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_445072E6_74B9_C0F2_41C8_68564CCCE502",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.92,
   "yaw": -42.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_0C9AAADE_1F2C_38E7_41BD_DB08C00E26CB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72D0700_FB8E_5DEB_41E2_C6035E5AD4D7",
   "pitch": -15.14,
   "hfov": 18.92,
   "yaw": -42.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B17B366_74B7_41F2_41B3_1671E7945EFE",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.79,
   "yaw": 53.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_0CAD9AA3_1F2C_3B5D_41A1_51EB6A5C39D4); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72CD700_FB8E_5DEB_41E5_298F5C9661EA",
   "pitch": -14.01,
   "hfov": 17.79,
   "yaw": 53.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59A64057_74B7_3FD2_41BF_8B308D428440",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.54,
   "yaw": 0.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_0CB30AC0_1F2C_38DB_418F_45C01AADF330); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72C9700_FB8E_5DEB_41DC_C58689A3441C",
   "pitch": -12.12,
   "hfov": 11.54,
   "yaw": 0.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B4C739C_74C8_C156_4171_0FD6AAA48048",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 36.8,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 41.51,
 "bleaching": 0.7,
 "id": "overlay_4D20CEBC_74C9_C357_41C0_FD89B2559390"
},
{
 "bleachingDistance": 0.4,
 "yaw": -28.26,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 40.01,
 "bleaching": 0.7,
 "id": "overlay_40B6CAE7_74C9_C0F2_4160_04D7A81E5356"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": 1.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_6EE0F67B_7948_AE29_419A_AA5A6A67666F, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72C3701_FB8E_5DED_41C0_174E7DC9594A",
   "pitch": 8.7,
   "hfov": 2.25,
   "yaw": 1.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6EF486A9_7948_AE28_4186_6DAC24AAF0FF",
 "data": {
  "label": "JFEstigarribia info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 4.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_6EF8867C_7948_AE2F_41D0_CA23B9123B0D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_6_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": 4.18,
   "yaw": -0.02,
   "distance": 50
  }
 ],
 "id": "overlay_6EF496A9_7948_AE28_41D4_D711988EA7A8",
 "data": {
  "label": "JFEstigarribia foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.87,
   "yaw": -20.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_68258B13_7CCE_998B_41DB_6F592F0455BB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E2525DB_7CC1_A8BA_41B9_FEEB5D193E7A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_7_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": -29.1,
   "yaw": -20.81,
   "distance": 50
  }
 ],
 "id": "overlay_6FD0C7EA_7CC1_A89A_41DE_7F8BDEA1F427",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.85,
   "yaw": 23.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E2545DB_7CC1_A8BA_41D2_EDDFD86F9268, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_8_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": -30.22,
   "yaw": 23.47,
   "distance": 50
  }
 ],
 "id": "overlay_68BF327B_7CC1_687A_41DA_7AE8F6340536",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.61,
   "yaw": 10.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5E2595DB_7CC1_A8BA_41BE_540427022E22, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_9_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": -41.07,
   "yaw": 10.32,
   "distance": 50
  }
 ],
 "id": "overlay_6E36A5B5_7CCE_A88E_41D8_0FDF2C2B94B2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": 6.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 35.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_572876B8_7D41_E885_41D2_B5C07F2528F0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4E99304C_7D43_A79D_41D5_5DD7FC0DF257, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_10_0.png",
      "width": 182,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ]
   },
   "pitch": 35.4,
   "yaw": 6.67,
   "distance": 50
  }
 ],
 "id": "overlay_69BAEA46_7CC2_9B8D_41DF_30F32BAA43BA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.54,
   "yaw": 171.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_11_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 55.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4E98204C_7D43_A79D_41C3_9CEF2C8B5331, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_11_0.png",
      "width": 248,
      "class": "ImageResourceLevel",
      "height": 223
     }
    ]
   },
   "pitch": 55.41,
   "yaw": 171.3,
   "distance": 50
  }
 ],
 "id": "overlay_6991D8D6_7CDE_B88A_41CD_62FCCD110213",
 "data": {
  "label": "Ventanal FS Lopez"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.99,
   "yaw": -29.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 7.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5487D549_7D4E_A987_41D4_835867686345, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_54073BBA_7D46_98FA_41CA_DE333FA3B8F3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_12_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": 7.36,
   "yaw": -29.92,
   "distance": 50
  }
 ],
 "id": "overlay_6AC796DC_7CC2_E8BE_417E_8D22BE70ED0B",
 "data": {
  "label": "CA Lopez foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.21,
   "yaw": -27.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_64BEC982_7CC6_988A_41BA_EC318ACECEE7, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72A7702_FB8E_5DEF_41B0_642725150EC4",
   "pitch": 13.64,
   "hfov": 2.21,
   "yaw": -27.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_692965B0_7CC1_6886_41CB_65B53A9D0EE2",
 "data": {
  "label": "CA Lopez info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.81,
   "yaw": -29.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 6.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_14_0.png",
      "width": 772,
      "class": "ImageResourceLevel",
      "height": 1216
     }
    ]
   },
   "pitch": 6.34,
   "yaw": -29.65,
   "distance": 50
  }
 ],
 "id": "overlay_644367A4_7CC2_A88D_41DF_199D56634A7D",
 "data": {
  "label": "CA Lopez Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 29.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 5.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_15_0.png",
      "width": 772,
      "class": "ImageResourceLevel",
      "height": 1216
     }
    ]
   },
   "pitch": 5.37,
   "yaw": 29.89,
   "distance": 50
  }
 ],
 "id": "overlay_648DF15C_7CCE_A9BE_41B4_9BD0C96997FA",
 "data": {
  "label": "Beato Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.99,
   "yaw": 30.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 6.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5407FBBB_7D46_98FA_41D2_6D1230ED05FF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_16_0.png",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": 6.29,
   "yaw": 30.02,
   "distance": 50
  }
 ],
 "id": "overlay_644C0C22_7CCE_9F8A_41C6_8E3EE903E2E8",
 "data": {
  "label": "Beato Foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.19,
   "yaw": -105.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_17_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": 10.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_17_0.png",
      "width": 1183,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 10.29,
   "yaw": -105.99,
   "distance": 50
  }
 ],
 "id": "overlay_6758E755_7CC2_E98F_41DA_E77602DC5399",
 "data": {
  "label": "JGR de Francia Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.2,
   "yaw": -104.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_18_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_553D087A_7D4E_B87A_419E_89BC379AF377, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_54074BBC_7D46_98FE_41CC_59034A81230E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_18_0.png",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 176
     }
    ]
   },
   "pitch": 15.44,
   "yaw": -104.92,
   "distance": 50
  }
 ],
 "id": "overlay_62ECB033_7CC1_678A_41D7_6B945A85FAEA",
 "data": {
  "label": "JGR de Francia Foto"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 6.67,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_69A62A26_7CC2_9B8A_41D6_DACDAEC1CF16",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_69A62A26_7CC2_9B8A_41D6_DACDAEC1CF16_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 35.4,
 "hideEasing": "cubic_out",
 "hfov": 2.68
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 171.3,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_699D98A7_7CDE_B88A_4199_54AA28069533",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_699D98A7_7CDE_B88A_4199_54AA28069533_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 55.41,
 "hideEasing": "cubic_out",
 "hfov": 2.54
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -104.92,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6110E014_7CC1_678E_41D5_2510886C7E53",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6110E014_7CC1_678E_41D5_2510886C7E53_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 15.44,
 "hideEasing": "cubic_out",
 "hfov": 3.2
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.03,
   "yaw": 105.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_19_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_563C1494_7DC2_A88D_41DD_BA8C2553B005, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4207C9CD_7DCE_B89E_41CF_CC1568025D16, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_19_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 184
     }
    ]
   },
   "pitch": 15.42,
   "yaw": 105.22,
   "distance": 50
  }
 ],
 "id": "overlay_5728CFB5_7DC1_988E_41C8_368B04AC30EA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.35,
   "yaw": 105.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_20_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ]
   },
   "pitch": 11.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_20_0.png",
      "width": 1224,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 11.57,
   "yaw": 105.51,
   "distance": 50
  }
 ],
 "id": "overlay_566C43DB_7DCF_A8BA_41B3_13C7A26A1810",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.4,
   "yaw": 179.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_22_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 8.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_22_0.png",
      "width": 977,
      "class": "ImageResourceLevel",
      "height": 1491
     }
    ]
   },
   "pitch": 8.58,
   "yaw": 179.83,
   "distance": 50
  }
 ],
 "id": "overlay_567B29B0_7DC1_B885_41D4_D7D82FF966F1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.49,
   "yaw": -177.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_23_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D717B703_FB8E_5DED_41DE_E806BAD9A3FA",
   "pitch": 17.44,
   "hfov": 2.49,
   "yaw": -177.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_45511FF0_7CC2_9886_41D3_99C6F8AA80DB",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.11,
   "yaw": -179.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_24_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_3D296A5C_7F46_9BBE_41CB_DED7AC8E13AB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_24_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ]
   },
   "pitch": 9.92,
   "yaw": -179.99,
   "distance": 50
  }
 ],
 "id": "overlay_47AE31A8_7CC1_E886_41C5_4C67A1767907",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.48,
   "yaw": -102.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_25_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 26.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D716D703_FB8E_5DED_41ED_A6CB42CE23B3",
   "pitch": 26.43,
   "hfov": 3.48,
   "yaw": -102.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_97C04846_858C_FDF6_41B2_54737BCEEDB0",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 31.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_26_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_907C1FAC_859C_D2BA_41DD_DB6512181B46, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7168704_FB8E_5DEB_41EC_323E591F82F4",
   "pitch": 14.29,
   "hfov": 2.35,
   "yaw": 31.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_907B6FBD_859C_D29A_41C9_948C38E516EC",
 "data": {
  "label": "Info Beato"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.28,
   "yaw": 107.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_27_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_921753EC_8584_52BA_41E0_5462D2E16D21, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7165704_FB8E_5DEB_41E8_C5B8C393B567",
   "pitch": 27.27,
   "hfov": 3.28,
   "yaw": 107.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_921C23FE_8584_5296_41DD_5DEF4B254632",
 "data": {
  "label": "Info Juan Pablo II"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 1358.95,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_0_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1360.85,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1358.95,
  "y": 1360.85,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_0.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6C2F47BC_7449_C156_41CA_FB850D37B14B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 716.46,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_1_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1371.84,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 716.46,
  "y": 1371.84,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_1.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6818ECC7_7449_C732_41DA_316C6BADAEEB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 14.8,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_2_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1229.17,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 14.8,
  "y": 1229.17,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_2.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6F0D0C09_7449_473E_41C8_C58148676689",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 1293.38,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_3_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 672.07,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1293.38,
  "y": 672.07,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_3.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_69B15D3C_7449_4156_41CA_FCB342656F87",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 1288.63,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_4_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 514.07,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 1288.63,
  "y": 514.07,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_4.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_687569EB_7448_C0F2_41A6_7C54D36E20F4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 886.28,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_5_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 488.28,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 886.28,
  "y": 488.28,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_5.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6FBD89A7_7448_C172_41AA_8CF19DA2E18E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 708.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_6_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 304.61,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 708.05,
  "y": 304.61,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_6.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_68427A5A_7448_C3D3_41CF_1F64681A901A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 709.13,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_7_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 143.62,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 709.13,
  "y": 143.62,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_7.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6C286CBC_744F_4756_4192_203C0CAD1302",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 487.19,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_8_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 471.85,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 487.19,
  "y": 471.85,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_8.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6C248B70_744F_41EE_41B6_02687357F8C0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 698.95,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_9_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 679.41,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 698.95,
  "y": 679.41,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_9.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_68340D9B_744F_4152_41BC_4EC837EC4A5B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "map": {
  "width": 174.05,
  "x": 698,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_10_map.gif",
     "width": 22,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 848.27,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 698,
  "y": 848.27,
  "width": 174.05,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_10.png",
     "width": 174,
     "class": "ImageResourceLevel",
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_6FD28344_744F_C136_41D3_249E0BD1A676",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.67,
   "yaw": -127.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A, this.camera_0A472D22_1F2C_395F_4186_8A57BE2905E4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D6C9F6EE_FB8E_5C36_41E0_4FE8FBCB5415",
   "pitch": -6.4,
   "hfov": 6.67,
   "yaw": -127.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A4DDD67_7458_C1F2_41BB_A0CB77E638B2",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.59,
   "yaw": -121.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534, this.camera_0AA68D41_1F2C_39DD_417D_3A5E570A792F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D6C906EF_FB8E_5C36_41E6_36C40764812F",
   "pitch": -3.03,
   "hfov": 3.59,
   "yaw": -121.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_549307EB_745F_C0F1_41BA_4FB9E1DF1ECA",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.01,
   "yaw": -36.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA, this.camera_0A673D03_1F2C_395D_418E_BB6C198E2FBF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D6C8C6EF_FB8E_5C36_41CD_E2C1BDC3CE92",
   "pitch": -1.44,
   "hfov": 8.01,
   "yaw": -36.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BEEA622_7458_C372_41CD_C4C9B10E8C86",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0",
 "angle": -66,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 111.67,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 81.96,
 "bleaching": 0.7,
 "id": "overlay_4EC05072_74CB_7FD2_41CC_D4B965AD3E43"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.91,
   "yaw": -45.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_79C4972F_7748_AE29_41D3_D5203F685831, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Breve Rese\u00f1a del Paraguay"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D6C816EF_FB8E_5C36_41D9_3FC24A9DB41F",
   "pitch": 14.33,
   "hfov": 1.91,
   "yaw": -45.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_7924616C_774B_6228_41CB_04FC9FDA8187",
 "data": {
  "label": "Breve Rese\u00f1a del Paraguay"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.9,
   "yaw": -26.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_653F64CA_7748_E268_41D1_CBE77F2670A8, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Historia del Pante\u00f3n"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73746F0_FB8E_5C2A_41E2_6012CF1945C2",
   "pitch": 14.49,
   "hfov": 1.9,
   "yaw": -26.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_65C9D518_7748_E3E8_41C1_DDE6B84C93B0",
 "data": {
  "label": "Historia del Pante\u00f3n"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.93,
   "yaw": -171.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.visitapy.com/mts', '_top')",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ir al Museo de Trenes - Sapuc\u00e1i"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.93,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_8_0.png",
      "width": 900,
      "class": "ImageResourceLevel",
      "height": 891
     }
    ]
   },
   "pitch": 10.53,
   "yaw": -171.09,
   "distance": 50
  }
 ],
 "id": "overlay_C07B9E88_CF73_A0BC_41BA_ACCDDE193D0D",
 "data": {
  "label": "Image"
 }
},
{
 "media": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C35CA53_1F2C_3BFD_4187_B33122A5D504, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C35CA53_1F2C_3BFD_4187_B33122A5D504",
 "camera": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_camera"
},
{
 "media": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C370A54_1F2C_3BFB_41B7_2BE431ECC221, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C370A54_1F2C_3BFB_41B7_2BE431ECC221",
 "camera": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_camera"
},
{
 "media": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C081A55_1F2C_3BE5_41B7_BCDF8B8C7AF0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C081A55_1F2C_3BE5_41B7_BCDF8B8C7AF0",
 "camera": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_camera"
},
{
 "media": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C08BA55_1F2C_3BE5_41BB_03F8A95E80B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C08BA55_1F2C_3BE5_41BB_03F8A95E80B7",
 "camera": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA_camera"
},
{
 "media": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C099A55_1F2C_3BE5_41B6_0171B145BA1C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C099A55_1F2C_3BE5_41B6_0171B145BA1C",
 "camera": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_camera"
},
{
 "media": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C0A9A56_1F2C_3BE7_4198_C669D0F709B3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C0A9A56_1F2C_3BE7_4198_C669D0F709B3",
 "camera": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_camera"
},
{
 "media": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C0BBA57_1F2C_3BE5_41B0_DA3A069DC6A7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C0BBA57_1F2C_3BE5_41B0_DA3A069DC6A7",
 "camera": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_camera"
},
{
 "media": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C0CAA57_1F2C_3BE5_4174_77DE560E5B4F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C0CAA57_1F2C_3BE5_4174_77DE560E5B4F",
 "camera": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_camera"
},
{
 "media": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C0E3A58_1F2C_3BEB_41B4_709D0C2385B6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C0E3A58_1F2C_3BEB_41B4_709D0C2385B6",
 "camera": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_camera"
},
{
 "media": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C0F4A58_1F2C_3BEB_41B0_0259426E8679, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C0F4A58_1F2C_3BEB_41B0_0259426E8679",
 "camera": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_camera"
},
{
 "media": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
 "end": "this.trigger('tourEnded')",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_0C009A59_1F2C_3BED_41BE_6CC2BAE4B5DB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0C009A59_1F2C_3BED_41BE_6CC2BAE4B5DB",
 "camera": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128_camera"
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_tcap0",
 "angle": -180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -41.58,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 10.11,
 "bleaching": 0.7,
 "id": "overlay_6319A273_7321_1FE1_41B1_1ADCF754116C"
},
{
 "bleachingDistance": 0.4,
 "yaw": -5.65,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 24.18,
 "bleaching": 0.7,
 "id": "overlay_63FDF024_732F_1B67_41C6_5A047CF3C1BD"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.66,
   "yaw": -0.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 4.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_14_0.png",
      "width": 482,
      "class": "ImageResourceLevel",
      "height": 778
     }
    ]
   },
   "pitch": 4.41,
   "yaw": -0.46,
   "distance": 50
  }
 ],
 "id": "overlay_47287BD9_7CC7_9886_41B9_601864129C3D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_0A184CDD_1F2C_38E5_41A4_B978090472BE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72566FB_FB8E_5C1D_41E9_D78690758FB7",
   "pitch": -21.17,
   "hfov": 13.59,
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B32F65A_74B9_43D2_41D2_D4340B33B438",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.61,
   "yaw": 29.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_0BC6CC81_1F2C_3F5D_41B9_60F0FE23502F); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72536FC_FB8E_5C1B_41EA_20C96F811CA8",
   "pitch": -1.39,
   "hfov": 10.61,
   "yaw": 29.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5B89082B_74BB_4F72_41CC_92CC173FBCA5",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.63,
   "yaw": -27.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_0A26ACAF_1F2C_38A5_4197_5D8B56AC4B28); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72496FC_FB8E_5C1B_41EA_9DAC5DF5404E",
   "pitch": -10.08,
   "hfov": 10.63,
   "yaw": -27.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_597410AF_74BB_3F72_41C5_851D6596A7C0",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -19.47,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 29.96,
 "bleaching": 0.7,
 "id": "overlay_49D5A305_74C9_4136_41D0_B7BC001524D8"
},
{
 "bleachingDistance": 0.4,
 "yaw": 23.24,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 32.22,
 "bleaching": 0.7,
 "id": "overlay_41A20A23_74C9_4371_41C5_D4170493786B"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.18,
   "yaw": 0.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_6EB60D2A_78DF_E22B_41DA_59F22F850E4B, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72426FC_FB8E_5C1B_41DA_70B909025BFA",
   "pitch": 7.1,
   "hfov": 1.18,
   "yaw": 0.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6EABBD58_78DF_E268_41DB_E85D06D89FFD",
 "data": {
  "label": "JF Estigarribia Info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.13,
   "yaw": -0.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 3.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6EBEED2B_78DF_E228_419E_876D9449DEE3, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_6EBEFD2B_78DF_E228_41D9_86556289A261, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_5_0.png",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": 3.85,
   "yaw": -0.63,
   "distance": 50
  }
 ],
 "id": "overlay_6EA53D58_78DF_E268_41DB_895C90750F09",
 "data": {
  "label": "JF Estigarribia Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.88,
   "yaw": 4.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4E8F4045_7D43_A78F_41BF_008706213A36, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_6_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 28.52,
   "yaw": 4.12,
   "distance": 50
  }
 ],
 "id": "overlay_6F4C55A7_7CC3_A88A_41DD_5F999B18A768",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.34,
   "yaw": 169.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_7_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 73.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4E8EA046_7D43_A78D_41D6_6779A0D71D89, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_7_0.png",
      "width": 265,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": 73.67,
   "yaw": 169.94,
   "distance": 50
  }
 ],
 "id": "overlay_699549F9_7CDF_B887_419D_0112A1FD30DB",
 "data": {
  "label": "Ventanal FS Lopez"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.48,
   "yaw": -20.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 5.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_8_0.png",
      "width": 584,
      "class": "ImageResourceLevel",
      "height": 927
     }
    ]
   },
   "pitch": 5.46,
   "yaw": -20.59,
   "distance": 50
  }
 ],
 "id": "overlay_6B4F5BB5_7CC1_B88E_41CC_42FEEA464B98",
 "data": {
  "label": "CA Lopez Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.24,
   "yaw": -19.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6B5BAFD5_7CC6_988F_41D8_4DCF040E46DD, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72326FD_FB8E_5C15_41DF_C3FF7B0B5581",
   "pitch": 10.35,
   "hfov": 2.24,
   "yaw": -19.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B5EBFE4_7CC6_988E_41D3_070DCEB1543F",
 "data": {
  "label": "CA Lopez info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.77,
   "yaw": -20.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_10_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5403ABB3_7D46_988A_41B7_B5688CCF9672, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_10_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ]
   },
   "pitch": 5.79,
   "yaw": -20.66,
   "distance": 50
  }
 ],
 "id": "overlay_6B7155D5_7CC2_A88E_41D5_BF0E0010F0F6",
 "data": {
  "label": "CA Lopez foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.7,
   "yaw": 19.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": 4.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_11_0.png",
      "width": 484,
      "class": "ImageResourceLevel",
      "height": 832
     }
    ]
   },
   "pitch": 4.49,
   "yaw": 19.29,
   "distance": 50
  }
 ],
 "id": "overlay_65501360_7CC1_6986_41C0_686F805FD606",
 "data": {
  "label": "Beato Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.66,
   "yaw": 19.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_12_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_5402CBB3_7D46_988A_41D1_F4BE91359572, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_12_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": 5.69,
   "yaw": 19.79,
   "distance": 50
  }
 ],
 "id": "overlay_65452B74_7CC2_998D_4174_EDE15BA2F6A2",
 "data": {
  "label": "Beato Foto"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 4.12,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6FB84588_7CC3_A886_41DA_D0B1AD27053F",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6FB84588_7CC3_A886_41DA_D0B1AD27053F_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 28.52,
 "hideEasing": "cubic_out",
 "hfov": 1.88
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 169.94,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_698139CA_7CDF_B885_41A7_43F744AE1AF3",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_698139CA_7CDF_B885_41A7_43F744AE1AF3_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 73.67,
 "hideEasing": "cubic_out",
 "hfov": 1.34
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -20.66,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6B7F65B6_7CC2_A88A_41DE_1AB30138FA42",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B7F65B6_7CC2_A88A_41DE_1AB30138FA42_0_1.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.79,
 "hideEasing": "cubic_out",
 "hfov": 1.77
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 19.79,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_657B9B45_7CC2_998F_418A_FFB9E7844C96",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_657B9B45_7CC2_998F_418A_FFB9E7844C96_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.69,
 "hideEasing": "cubic_out",
 "hfov": 1.66
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.19,
   "yaw": 179.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 19.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 34.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_13_0.png",
      "width": 1279,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 19.67,
   "yaw": 179.55,
   "distance": 50
  }
 ],
 "id": "overlay_54AC7638_7DDE_EB85_41C2_FA956E2EB3D6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.18,
   "yaw": 179.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 22.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_458480C0_7CC1_6886_41CB_73D8636B6DCC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_3D1CDA51_7F46_9B86_41CC_7C5B78F4109D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_15_0.png",
      "width": 250,
      "class": "ImageResourceLevel",
      "height": 245
     }
    ]
   },
   "pitch": 22.09,
   "yaw": 179.79,
   "distance": 50
  }
 ],
 "id": "overlay_452C5461_7CC6_AF86_41D1_CF19116B30BA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.46,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72136FE_FB8E_5C17_41E8_9F2B9E0399A5",
   "pitch": 37,
   "hfov": 3.46,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_451E122B_7CC2_AB9A_41B9_039657264BF1",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "rotationX": -16.15,
 "blending": 0,
 "id": "overlay_8CE20EC7_835D_1ED5_41DF_8221B426909F",
 "roll": 8.18,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_8CE20EC7_835D_1ED5_41DF_8221B426909F_t.jpg",
    "width": 856,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "pitch": 14.87,
 "useHandCursor": false,
 "yaw": 147.82,
 "autoplay": true,
 "vfov": 26.44,
 "rotationY": -30.18,
 "hfov": 21.45,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 856,
  "mp4Url": "media/video_8D1816BF_835D_0EB5_41C0_020C81D2D133.mp4",
  "class": "VideoResource",
  "height": 1000
 }
},
{
 "rotationX": -18.94,
 "blending": 0,
 "id": "overlay_92487A46_834D_01D7_41A5_BF98C79EA584",
 "roll": -11.09,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_92487A46_834D_01D7_41A5_BF98C79EA584_t.jpg",
    "width": 1422,
    "class": "ImageResourceLevel",
    "height": 884
   }
  ]
 },
 "pitch": 15.24,
 "useHandCursor": false,
 "yaw": -147.66,
 "autoplay": true,
 "vfov": 22.4,
 "rotationY": 31.43,
 "hfov": 28.17,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1218,
  "mp4Url": "media/video_93D6985C_834F_01F4_41DB_6D3F1D40F66C.mp4",
  "class": "VideoResource",
  "height": 758
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.2,
   "yaw": 20.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_90555454_859C_55EA_41DA_E582E8A515FD, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72FD6FE_FB8E_5C17_41E3_29A969AA0352",
   "pitch": 11.25,
   "hfov": 2.2,
   "yaw": 20.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9051F465_859C_55AA_41AE_7CC0E9809E20",
 "data": {
  "label": "Info Beato"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_tcap0",
 "angle": 125,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 171.46,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 86.73,
 "bleaching": 0.7,
 "id": "overlay_63012C92_7321_0B22_41B4_8548FFA07AC7"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 132.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A, this.camera_0D4E7FBF_1F2C_38A6_41BB_5FF6463AB819); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73416F1_FB8E_5C2D_41D2_0C643E713596",
   "pitch": -5.01,
   "hfov": 6.51,
   "yaw": 132.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5CE08A41_7449_C331_41D9_E06B6BABA738",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.29,
   "yaw": 126.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6, this.camera_0D531FDE_1F2C_38E6_41AA_7D3180A56C88); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D733E6F1_FB8E_5C2D_41CB_7CE770CCD5C0",
   "pitch": -2.67,
   "hfov": 4.29,
   "yaw": 126.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_530347E1_7448_C0EE_41D6_D62CD5FDA849",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.83,
   "yaw": 116.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D733A6F1_FB8E_5C2D_41CD_642CCD782949",
   "pitch": -0.96,
   "hfov": 4.83,
   "yaw": 116.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5EEA6E2F_7448_C372_41B8_F90221DD1398",
 "data": {
  "label": "Circle Arrow 02 Left"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -139.05,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 66.64,
 "bleaching": 0.7,
 "id": "overlay_63D8D63D_7321_0766_41D0_2B5D8231C748"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.84,
   "yaw": -84.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA, this.camera_0B864C25_1F2C_3FA5_41BD_C0EDD7E8481A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Acceso al Pasillo"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73FA6F3_FB8E_5C2D_41C1_80BC9F5F515A",
   "pitch": -17.73,
   "hfov": 14.84,
   "yaw": -84.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5CC40283_7449_C332_41C9_8069D9B730D1",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -96.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Acceso al Patio"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73F66F4_FB8E_5C2B_41E3_A6FDC0568362",
   "pitch": -9.74,
   "hfov": 7.43,
   "yaw": -96.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_531A8EED_7448_C0F6_41CD_5D706BD85A25",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.23,
   "yaw": -5.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_0BE5AC53_1F2C_3FFD_41BA_2200A85CC9A6); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Acceso al Interior"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73F26F4_FB8E_5C2B_41EC_88BAFB322494",
   "pitch": -6.29,
   "hfov": 10.23,
   "yaw": -5.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5DDB34F2_74B7_C0D2_41CE_37C25FF8F198",
 "data": {
  "label": "Acceso al Interior"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26,
   "yaw": 119.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 6.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_3_0.png",
      "width": 1453,
      "class": "ImageResourceLevel",
      "height": 1703
     }
    ]
   },
   "pitch": 6.37,
   "yaw": 119.26,
   "distance": 50
  }
 ],
 "id": "overlay_9FC3C222_85BC_EDAE_41DD_790BBB06A27F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.24,
   "yaw": 119.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 25.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_4_0.png",
      "width": 323,
      "class": "ImageResourceLevel",
      "height": 324
     }
    ]
   },
   "pitch": 25.94,
   "yaw": 119.98,
   "distance": 50
  }
 ],
 "id": "overlay_9F45F2B1_85BC_32AD_41DC_8CE93C7E4BFF",
 "data": {
  "label": "Himno Nacional del Paraguay"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7D747778_7323_05EE_41DC_97522F54C128_tcap0",
 "angle": -180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 155.88,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 30.96,
 "bleaching": 0.7,
 "id": "overlay_631F3DEE_732F_04E2_41BE_037B67803BBA"
},
{
 "bleachingDistance": 0.4,
 "yaw": -162.67,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 29.96,
 "bleaching": 0.7,
 "id": "overlay_63FE59DA_732F_0D22_41CB_248E9040C4CE"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 41.21,
   "yaw": -1.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_11_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 20.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 41.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_11_0.png",
      "width": 1299,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 20.09,
   "yaw": -1.1,
   "distance": 50
  }
 ],
 "id": "overlay_50948EE4_7DC2_F88D_41D4_D1E26DA44092",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.85,
   "yaw": 149.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_0EDBDEAD_1F2C_38AA_41B3_FCCB72F1A4C2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7034710_FB8E_5DEB_41C6_A9D19A7FCA30",
   "pitch": -5.47,
   "hfov": 8.85,
   "yaw": 149.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_45C3E042_74DB_3F32_41C2_20BE9BDE513F",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.33,
   "yaw": 179.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_0ED77ECB_1F2C_38EE_41B1_33A3509BEA0A); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7031710_FB8E_5DEB_41BA_FABDBDBFFEB9",
   "pitch": -17.94,
   "hfov": 14.33,
   "yaw": 179.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_464DA314_74DB_C153_41B6_55AB5BB07F82",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -152.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_0D21AEE8_1F2C_38AA_41A8_316D658D48DA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D702F710_FB8E_5DEB_41B0_DA15FF224589",
   "pitch": -9.69,
   "hfov": 11.72,
   "yaw": -152.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4247EA74_74D8_C3D6_41CB_961CE8AF2AF7",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.46,
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D702B710_FB8E_5DEB_41DE_772E7F75D59B",
   "pitch": -4.73,
   "hfov": 9.46,
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4020C417_74D9_C752_41CB_062EFA0ADDD3",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 161.41,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 53.07,
 "bleaching": 0.7,
 "id": "overlay_4CDA38E0_74C9_C0EE_418D_1EB5EA1A6EAA"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.15,
   "yaw": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 37.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_49C55C9B_7449_4752_41D5_778AD11FD3A0, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D7022711_FB8E_5DED_41DB_1A4BCC88E600",
   "pitch": 37.42,
   "hfov": 4.15,
   "yaw": 5.33,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_434AB1FF_74C9_40D2_41C8_4B5517AACEEB",
 "data": {
  "label": "JFEstigarribia info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.84,
   "yaw": -1.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 26.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_36DA5444_7449_4736_41C6_9EE93A6F222A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_6_0.png",
      "width": 238,
      "class": "ImageResourceLevel",
      "height": 254
     }
    ]
   },
   "pitch": 26.6,
   "yaw": -1.45,
   "distance": 50
  }
 ],
 "id": "overlay_48AEABEB_74C8_C0F2_41DB_9B916C612E20",
 "data": {
  "label": "JFEstigarribia foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.51,
   "yaw": -175.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4EF1705D_7D43_A7BF_41B6_B292ACADAED5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_7_0.png",
      "width": 157,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ]
   },
   "pitch": 27.63,
   "yaw": -175.34,
   "distance": 50
  }
 ],
 "id": "overlay_6F5945E4_7CC2_A88D_41C1_776976A62B3C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.76,
   "yaw": -160.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 3.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_8_0.png",
      "width": 543,
      "class": "ImageResourceLevel",
      "height": 872
     }
    ]
   },
   "pitch": 3.4,
   "yaw": -160.72,
   "distance": 50
  }
 ],
 "id": "overlay_60E4F02D_7CC1_679E_41D5_3F9C5BE15E90",
 "data": {
  "label": "JGR de Francia Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.13,
   "yaw": -160.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_550D4797_7D42_A88A_41B4_91E4E9A86D12, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_540EEBCD_7D46_989E_41B8_F8DE7501ABE6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_9_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 5.11,
   "yaw": -160.29,
   "distance": 50
  }
 ],
 "id": "overlay_5EC116BB_7CCE_E8FA_41AC_75FAD72565F0",
 "data": {
  "label": "JGR de Francia Foto"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -175.34,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6F4545B5_7CC2_A88E_4171_91ABFD1ECCEE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F4545B5_7CC2_A88E_4171_91ABFD1ECCEE_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 27.63,
 "hideEasing": "cubic_out",
 "hfov": 2.51
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.82,
   "yaw": 13.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_10_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 74.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4EF1D05F_7D43_A7BB_41A2_33C857274DFB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_10_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 304
     }
    ]
   },
   "pitch": 74.15,
   "yaw": 13.77,
   "distance": 50
  }
 ],
 "id": "overlay_57E2D380_7D7E_A886_41DA_AB9242EAC4D7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.94,
   "yaw": 159.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 5.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_536BE102_7DC3_E98A_41C1_DC1F77107319, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_421F19E1_7DCE_B886_41DE_A5EDF1BA2977, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_12_0.png",
      "width": 108,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 5.29,
   "yaw": 159.25,
   "distance": 50
  }
 ],
 "id": "overlay_50614AC6_7DC3_988A_41CA_E1A3A78A2C6D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 159.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ]
   },
   "pitch": 5.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_13_0.png",
      "width": 611,
      "class": "ImageResourceLevel",
      "height": 924
     }
    ]
   },
   "pitch": 5.32,
   "yaw": 159.39,
   "distance": 50
  }
 ],
 "id": "overlay_503C52DF_7DC3_A8BA_41BA_B1A6CBBF048A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 179.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 2.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_14_0.png",
      "width": 388,
      "class": "ImageResourceLevel",
      "height": 620
     }
    ]
   },
   "pitch": 2.85,
   "yaw": 179.51,
   "distance": 50
  }
 ],
 "id": "overlay_4C0E868D_7DC2_E89E_41C0_81732FF0C625",
 "data": {
  "label": "Image"
 }
},
{
 "rotationX": -12.49,
 "blending": 0,
 "id": "overlay_9232E91B_834D_037D_41A8_A27C4FC69534",
 "roll": 6.64,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_9232E91B_834D_037D_41A8_A27C4FC69534_t.jpg",
    "width": 902,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 },
 "pitch": 11.18,
 "useHandCursor": false,
 "yaw": -33.66,
 "autoplay": true,
 "vfov": 26.38,
 "rotationY": -30.76,
 "hfov": 22.75,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "JF FRAME"
 },
 "video": {
  "width": 878,
  "mp4Url": "media/video_927B716B_834D_03DD_4197_7D0AC69E6FAB.mp4",
  "class": "VideoResource",
  "height": 1052
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.08,
   "yaw": -1.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 50.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.overlay_9232E91B_834D_037D_41A8_A27C4FC69534.set('enabled', !this.overlay_9232E91B_834D_037D_41A8_A27C4FC69534.get('enabled')); this.overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54.set('enabled', !this.overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54.get('enabled'))",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D70FA712_FB8E_5DEF_41EE_A24225A919A8",
   "pitch": 50.18,
   "hfov": 3.08,
   "yaw": -1.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_965853EF_835F_06D5_41CF_3BA958061FD3",
 "data": {
  "label": "Info 02"
 }
},
{
 "rotationX": -15.15,
 "blending": 0,
 "id": "overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54",
 "roll": -9.19,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54_t.jpg",
    "width": 1496,
    "class": "ImageResourceLevel",
    "height": 900
   }
  ]
 },
 "pitch": 12.81,
 "useHandCursor": false,
 "yaw": 32.42,
 "autoplay": true,
 "vfov": 21.13,
 "rotationY": 29.25,
 "hfov": 32.57,
 "enabledInCardboard": true,
 "class": "VideoPanoramaOverlay",
 "videoVisibleOnStop": false,
 "distance": 50,
 "data": {
  "label": "Video"
 },
 "video": {
  "width": 1238,
  "mp4Url": "media/video_92F572DC_8343_06FB_41CF_864C3CA67A6B.mp4",
  "class": "VideoResource",
  "height": 746
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.06,
   "yaw": -159.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D70F1712_FB8E_5DEF_41E6_836A4062A306",
   "pitch": 10.22,
   "hfov": 2.06,
   "yaw": -159.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_962E40C0_858C_2EEA_4198_3B6B45914624",
 "data": {
  "label": "Info Red 05"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": -75.24,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 36.99,
 "bleaching": 0.7,
 "id": "overlay_63D78E7A_7321_07E3_41D9_7D6C42976265"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 178.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A, this.camera_0D090F22_1F2C_395E_41B2_F6F110E83D34); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73CD6F5_FB8E_5C15_41DF_4EB1EA6FB659",
   "pitch": -10.15,
   "hfov": 14.34,
   "yaw": 178.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59A71FAE_74B8_C172_41D3_4E2122E5A753",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.8,
   "yaw": 49.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_0D7EBFA0_1F2C_395A_41BE_657F9ABD5753); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73CB6F6_FB8E_5C17_41D2_33E6FCD2185B",
   "pitch": -14.56,
   "hfov": 15.8,
   "yaw": 49.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F818F2B_74B9_4172_41CF_531F0E90AD8A",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.23,
   "yaw": 62.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB, this.camera_0D064F3F_1F2C_39A6_41AC_39A888CC5BBD); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73C76F6_FB8E_5C17_41E6_08D494D9BFDA",
   "pitch": -9.81,
   "hfov": 10.23,
   "yaw": 62.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5D5171B2_74BB_C153_41D4_832669D3E542",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.57,
   "yaw": -48.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_0D3DCF05_1F2C_395A_41BE_837A742706CA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73BD6F6_FB8E_5C17_41E7_AAD802DC490F",
   "pitch": -13.01,
   "hfov": 15.57,
   "yaw": -48.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5E9CC8FE_74B9_C0D2_41D6_FC36A1E55B53",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.14,
   "yaw": -65.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7D747778_7323_05EE_41DC_97522F54C128, this.camera_0D6ECF81_1F2C_395A_41AD_4B5591E43D60); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73B86F6_FB8E_5C17_41E7_1D2F55F59BCC",
   "pitch": -10.28,
   "hfov": 11.14,
   "yaw": -65.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_59DDDB74_74B8_C1D6_41AD_FCA250C5A3B5",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.23,
   "yaw": -72.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_22_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 5.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_22_0.png",
      "width": 627,
      "class": "ImageResourceLevel",
      "height": 1005
     }
    ]
   },
   "pitch": 5.99,
   "yaw": -72.12,
   "distance": 50
  }
 ],
 "id": "overlay_562C3CF5_7DC7_988E_41BB_A5351190883C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.1,
   "yaw": -0.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_0D137F60_1F2C_39DA_418A_C40B70BC9BFE); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73B26F7_FB8E_5C15_41E2_6678D4747EEF",
   "pitch": -7.06,
   "hfov": 16.1,
   "yaw": -0.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5EA13A47_74BF_C332_41D9_16C3D1D36F48",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.79,
   "yaw": -70.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_37B91467_75C8_C7F2_41D3_21C3C32CBCD2, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73A96F8_FB8E_5C1B_41D5_EB4A8B7BD6E6",
   "pitch": 11.5,
   "hfov": 1.79,
   "yaw": -70.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_37C404F3_75C8_C0D2_41CB_5F49807F6F16",
 "data": {
  "label": "JF Estigarribia Info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.76,
   "yaw": -72.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_8_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "pitch": 6.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_37B06473_75C8_C7D2_41D9_A6490CEFC935, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_37B07473_75C8_C7D2_41D7_57FF2264C800, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_8_0.png",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 137
     }
    ]
   },
   "pitch": 6.84,
   "yaw": -72.67,
   "distance": 50
  }
 ],
 "id": "overlay_37C5E4F3_75C8_C0D2_41D4_3B58EBC42A69",
 "data": {
  "label": "JF Estigarribia Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.6,
   "yaw": -66.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 41.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5695574B_7D41_A99A_41D7_21C661FD19EE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4E89A040_7D43_A785_41D5_F3BA7DED3536, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_9_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 41.48,
   "yaw": -66.16,
   "distance": 50
  }
 ],
 "id": "overlay_6FA0E914_7CC2_998E_41C1_C70B327E4308",
 "data": {
  "label": "Ventanal JF Estigarribia"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.57,
   "yaw": 76.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 42.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_566B7F84_7D46_988E_41BE_73EF3146CE56, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_4E889041_7D43_A787_41B3_DC4A3EE10855, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_10_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 42.89,
   "yaw": 76.48,
   "distance": 50
  }
 ],
 "id": "overlay_69E04017_7CC1_E78B_41D0_383F479DFCFE",
 "data": {
  "label": "Ventanal FS Lopez"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.77,
   "yaw": -100.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "pitch": 14.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 28.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_11_0.png",
      "width": 1391,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 14.52,
   "yaw": -100.62,
   "distance": 50
  }
 ],
 "id": "overlay_6B49294E_7CC1_999A_41B0_2964F4E961BC",
 "data": {
  "label": "CA Lopez Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.2,
   "yaw": -98.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6BA335F7_7CC7_A88B_41DB_CCA2711C24E8, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73B36F9_FB8E_5C1D_41CA_7041AC322D70",
   "pitch": 28.04,
   "hfov": 3.2,
   "yaw": -98.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BA4D606_7CC7_AB8A_41D5_1FE7684556AD",
 "data": {
  "label": "CA Lopez info"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.7,
   "yaw": -101.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_13_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_541D4BAD_7D46_989E_41DA_DB5F8207EDA2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_13_0.png",
      "width": 215,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": 17.58,
   "yaw": -101.04,
   "distance": 50
  }
 ],
 "id": "overlay_6B4ECDF1_7CC2_9886_41DA_DF189E07A751",
 "data": {
  "label": "CA Lopez foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.51,
   "yaw": -29.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 7.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_14_0.png",
      "width": 757,
      "class": "ImageResourceLevel",
      "height": 1208
     }
    ]
   },
   "pitch": 7.65,
   "yaw": -29.82,
   "distance": 50
  }
 ],
 "id": "overlay_654B4AA3_7CFF_B88A_41DD_58C97C8EC289",
 "data": {
  "label": "Beato Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.19,
   "yaw": -29.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_422B29BE_7DCE_B8FA_41CC_273190D1929F, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_15_0.png",
      "width": 123,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ]
   },
   "pitch": 9.31,
   "yaw": -29.9,
   "distance": 50
  }
 ],
 "id": "overlay_654ABB66_7CC2_998D_41DA_34F2A6A04442",
 "data": {
  "label": "Beato Foto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.18,
   "yaw": 97.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_16_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 28
     }
    ]
   },
   "pitch": 10.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_16_0.png",
      "width": 1138,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 10.42,
   "yaw": 97.5,
   "distance": 50
  }
 ],
 "id": "overlay_618210DB_7CC1_E8BA_41D2_24F618C89D7F",
 "data": {
  "label": "JGR de Francia Title"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.16,
   "yaw": 98.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_17_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 17.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_55449B6D_7D43_799E_41BE_32FF20E0245A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_541DEBAF_7D46_989A_41B1_FA5578882B38, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_17_0.png",
      "width": 242,
      "class": "ImageResourceLevel",
      "height": 191
     }
    ]
   },
   "pitch": 17.67,
   "yaw": 98.53,
   "distance": 50
  }
 ],
 "id": "overlay_62FC8820_7CC1_E785_41CA_A9F0B5B8A4B3",
 "data": {
  "label": "JGR de Francia Foto"
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -66.16,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6FACE8F5_7CC2_988E_41D1_BFB07CD810B8",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6FACE8F5_7CC2_988E_41D1_BFB07CD810B8_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 610
   }
  ]
 },
 "pitch": 41.48,
 "hideEasing": "cubic_out",
 "hfov": 1.6
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 76.48,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_69EC0FF7_7CC1_F88A_41DE_3AD336F26615",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_69EC0FF7_7CC1_F88A_41DE_3AD336F26615_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ]
 },
 "pitch": 42.89,
 "hideEasing": "cubic_out",
 "hfov": 1.57
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -101.04,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6B5A0DC2_7CC2_988A_41BD_D4BD75A16ACE",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B5A0DC2_7CC2_988A_41BD_D4BD75A16ACE_0_3.jpg",
    "width": 585,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 17.58,
 "hideEasing": "cubic_out",
 "hfov": 3.7
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -30.01,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_65418B37_7CC2_998B_41CC_BE7280ED463B",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_65418B37_7CC2_998B_41CC_BE7280ED463B_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 8.23,
 "hideEasing": "cubic_out",
 "hfov": 1.98
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 98.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_62E16800_7CC1_E786_41D1_A7A8C41C1D10",
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62E16800_7CC1_E786_41D1_A7A8C41C1D10_0_1.jpg",
    "width": 682,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 17.67,
 "hideEasing": "cubic_out",
 "hfov": 4.16
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.74,
   "yaw": 27.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_19_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 8.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_19_0.png",
      "width": 772,
      "class": "ImageResourceLevel",
      "height": 1216
     }
    ]
   },
   "pitch": 8.46,
   "yaw": 27.43,
   "distance": 50
  }
 ],
 "id": "overlay_53E71730_7DCF_6986_41D6_4DC2CFB5500F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.85,
   "yaw": 69.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_20_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 6.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_20_0.png",
      "width": 663,
      "class": "ImageResourceLevel",
      "height": 1077
     }
    ]
   },
   "pitch": 6.85,
   "yaw": 69.65,
   "distance": 50
  }
 ],
 "id": "overlay_53CA4D5B_7DC1_79BB_41C1_B94F0A3E38C9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.87,
   "yaw": 69.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_21_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_423619C0_7DCE_B886_41B8_9D89B19B5E95, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 1.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_21_0.png",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ]
   },
   "pitch": 7.17,
   "yaw": 69.83,
   "distance": 50
  }
 ],
 "id": "overlay_5310ED82_7DC1_9885_41C4_856AB9E61AE4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.8,
   "yaw": 71.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_23_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D727C6FA_FB8E_5C1F_41DE_D5D47386FA15",
   "pitch": 12.31,
   "hfov": 1.8,
   "yaw": 71.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_46DCD89A_7CBE_B885_41CC_EB77083D836F",
 "data": {
  "label": "Info Francisco Solano"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.11,
   "yaw": 27.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_18_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_57126416_7DCF_AF8A_41AA_AB184A6512A2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'paddingBottom':5,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_422929BF_7DCE_B8FA_41C9_3D604782A849, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 2.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_18_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ]
   },
   "pitch": 9.23,
   "yaw": 27.84,
   "distance": 50
  }
 ],
 "id": "overlay_5650EBC5_7DCE_988E_41D6_F96DF7A5D377",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.78,
   "yaw": 101.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_24_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72796FA_FB8E_5C1F_41D4_2A17EB96A53B",
   "pitch": 28.93,
   "hfov": 2.78,
   "yaw": 101.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_956F425A_859C_2D9E_41CB_FA227B0B6A49",
 "data": {
  "label": "Info Jose Gaspar"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.15,
   "yaw": -28.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_25_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_9DB4192F_859C_5FB6_41DB_B26439333009, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72756FA_FB8E_5C1F_41E8_BC31CD2ABC19",
   "pitch": 15.73,
   "hfov": 2.15,
   "yaw": -28.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_90D59FE5_8584_F2AA_41DA_B7EA4AE268D6",
 "data": {
  "label": "Info Beato"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.15,
   "yaw": 29.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_26_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_D530EA7A_FB82_341F_419B_CDE83A7C9D3F, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D72726FB_FB8E_5C1D_41E7_6E79CB06F48F",
   "pitch": 16.1,
   "hfov": 2.15,
   "yaw": 29.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_9D6FBFC1_859C_72EA_41D1_D9015DFF79FA",
 "data": {
  "label": "Info Juan Pablo II"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "16px",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_7E911130_7321_FD7E_41C8_3413131F93CA_tcap0",
 "angle": 31,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "bleachingDistance": 0.4,
 "yaw": 174.98,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 65.63,
 "bleaching": 0.7,
 "id": "overlay_63D96A48_7321_0F2E_41C0_1245E822A059"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.13,
   "yaw": -149.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6, this.camera_0AC4DD99_1F2C_396A_41B6_90A0478D2537); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D73266F2_FB8E_5C2F_41E9_8C890731409F",
   "pitch": -14.32,
   "hfov": 11.13,
   "yaw": -149.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C631E87_7448_C331_41D6_64719DB78C84",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.35,
   "yaw": -121.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A, this.camera_0A850D5F_1F2C_39E5_41B5_648302E8B0F4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_D73226F2_FB8E_5C2F_41EC_6B4A2E1E6C84",
   "pitch": -10.24,
   "hfov": 9.35,
   "yaw": -121.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5312F7DF_744F_C0D2_41CC_6C870B4BBC6C",
 "data": {
  "label": "Circle Arrow 02 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.87,
   "yaw": 42.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A, this.camera_0AE53D7C_1F2C_39AB_41A8_4FB2980E5211); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_D731F6F2_FB8E_5C2F_41BA_082C2FE72EC4",
   "pitch": -9.91,
   "hfov": 13.87,
   "yaw": 42.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58341EA3_744F_4372_41C3_C201BEC31CDE",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.82,
   "yaw": 118.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 25
     }
    ]
   },
   "pitch": 2.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_4_0.png",
      "width": 1300,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 2.63,
   "yaw": 118.32,
   "distance": 50
  }
 ],
 "id": "overlay_620C0D36_7758_A23B_41D4_FADAD1FDBE4A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.57,
   "yaw": 161.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ]
   },
   "pitch": 2.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_5_0.png",
      "width": 1144,
      "class": "ImageResourceLevel",
      "height": 1965
     }
    ]
   },
   "pitch": 2.81,
   "yaw": 161.8,
   "distance": 50
  }
 ],
 "id": "overlay_63901FC7_7748_DE58_41DD_083C1207EABE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.16,
   "yaw": 64.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ]
   },
   "pitch": 4.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_6_0.png",
      "width": 733,
      "class": "ImageResourceLevel",
      "height": 1478
     }
    ]
   },
   "pitch": 4.75,
   "yaw": 64.98,
   "distance": 50
  }
 ],
 "id": "overlay_6221242E_7749_E228_41B5_8897D89554B5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.65,
   "yaw": -98.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 29
     }
    ]
   },
   "pitch": 1.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_7_0.png",
      "width": 1100,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 1.83,
   "yaw": -98.37,
   "distance": 50
  }
 ],
 "id": "overlay_6D1C24EE_78B8_E22B_4195_61F08AD2EE19",
 "data": {
  "label": "Image"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_653B74D3_7748_E278_41B9_7B961B2A4E9D",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">En octubre de 1863, el entonces presidente de la Rep\u00fablica Francisco Solano L\u00f3pez, orden\u00f3 la construcci\u00f3n del oratorio de la Virgen de la Asunci\u00f3n, fue dise\u00f1ada por el arquitecto italiano Alejandro Ravizza, en colaboraci\u00f3n con el constructor Gi\u00e1como Colombino. Pero, a consecuencia de la Guerra de la Triple Alianza, el edificio qued\u00f3 inconcluso y sobre andamios durante m\u00e1s de 70 a\u00f1os. Reci\u00e9n despu\u00e9s de la Guerra del Chaco en 1936 se pudo terminar y fue inaugurado el 12 de octubre del mismo a\u00f1o, para convertirlo por decreto presidencial en Pante\u00f3n Nacional de los H\u00e9roes.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Por presi\u00f3n de la jerarqu\u00eda eclesi\u00e1stica y ciudadanos devotos de la Virgen, que es considerada hasta ahora Patrona del Paraguay y Mariscala de sus Ej\u00e9rcitos, el Dr. F\u00e9lix Paiva se ve obligado a restituir el Oratorio a la Virgen de la Asunci\u00f3n en 1937 y al mismo tiempo continu\u00f3 siendo Pante\u00f3n Nacional de los H\u00e9roes. Por el Decreto N\u00b0 895/1993 del Arzobispado de Asunci\u00f3n, se nombr\u00f3 a Monse\u00f1or An\u00edbal Rachid Rector del Oratorio Nuestra Se\u00f1ora de la Asunci\u00f3n y por ende del Pante\u00f3n Nacional.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B><U>Valor hist\u00f3rico y cultural</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">El Pante\u00f3n Nacional de los H\u00e9roes es la r\u00e9plica paraguaya de Le Panth\u00e9on, un monumento ubicado en el V distrito de Par\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">El Pante\u00f3n Nacional es el mausoleo de la patria, donde reposan los restos mortales de los algunos h\u00e9roes de la historia Paraguaya como; Don Carlos Antonio L\u00f3pez (1.er presidente Constitucional), Mariscal Francisco Solano L\u00f3pez, Mariscal Jos\u00e9 F\u00e9lix Estigarribia (h\u00e9roe y vencedor en la guerra del Chaco contra Bolivia) y de su esposa. Adem\u00e1s, los Ni\u00f1os M\u00e1rtires de Acosta \u00d1u, dos Soldados Desconocidos, entre otros.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Dentro del recinto del pante\u00f3n se han fijado infinidad de placas honor\u00edficas enviadas por ilustres gobernantes extranjeros, reyes y pr\u00edncipes. Felicitaciones y versos de reconocimiento a la Armada Paraguaya, las Fuerzas A\u00e9reas entre otras instituciones. Muchos se preguntan que significado tiene la inscripci\u00f3n en lengua latina que se halla en la parte frontal del pante\u00f3n; \u201cFides et Patria\u201d significa, \u201cFe y Patria\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">En el a\u00f1o 2009, el Pante\u00f3n Nacional de los H\u00e9roes fue electo como uno de los Siete Tesoros del Patrimonio Cultural Material de Asunci\u00f3n, promovida por la Organizaci\u00f3n Capital Americana de la Cultura debido a la capital\u00eda de Asunci\u00f3n como Capital Americana de la Cultura 2009.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B><U>M\u00e9ritos para el ingreso</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Sobre los m\u00e9ritos que deben reunir una persona para ser inhumada en el Pante\u00f3n Nacional hay disparidad de criterios. Para muchos historiadores, debe haber contribuido con una causa \u00fatil a la humanidad, haber hecho una obra muy importante que le haya tra\u00eddo beneficios al pa\u00eds y al mundo en general. Hay quienes afirman que en el Pante\u00f3n est\u00e1n enterradas personas que no tienen suficientes m\u00e9ritos para descansar junto a los ilustres de la patria. No obstante, hay quienes consideran que todos los personajes que se encuentran all\u00ed, cada uno en su momento, se han destacado, se han ganado el m\u00e9rito de ingresar a este recinto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B><U>D\u00eda de los H\u00e9roes</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Cada 1 de marzo se conmemora el D\u00eda de los H\u00e9roes, en honor al Mariscal Francisco Solano L\u00f3pez, que hab\u00eda sido asesinado en la Guerra contra la Triple Alianza, acaecida en esa fecha en 1870. La ceremonia de recordaci\u00f3n generalmente es presidida por el Presidente de la Rep\u00fablica, representantes de las Fuerzas Armadas y del Congreso Nacional, ministros y otras autoridades. Se declara este d\u00eda como feriado y no hay actividad laboral en las instituciones p\u00fablicas.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText2884"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "width": 49,
 "right": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "bottom": 8,
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Image",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 30,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "bottom": "0%",
 "height": "85.959%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 600,
 "maxWidth": 600,
 "id": "Image_6643B8C0_7458_CF2F_41D6_027A16ABEDA9",
 "backgroundOpacity": 0,
 "width": "12.91%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_6643B8C0_7458_CF2F_41D6_027A16ABEDA9.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "Image",
 "height": "47.414%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5895"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_667BA06F_745B_5FF1_41D8_E0F77A6A58E8",
 "backgroundOpacity": 0,
 "children": [
  "this.Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
  "this.Label_3B5B3C77_7457_47D2_41B5_B06EEEEF5C4D"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "76.639%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container6442"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "5%",
 "bottom": "84.02%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "top": "7%",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "10%",
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "10%",
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "5%",
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "top": "7%",
 "bottom": "7%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "10%",
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "10%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Container",
 "top": "5%",
 "bottom": "5%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "10%",
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "10%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "top": "5%",
 "bottom": "84.67%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_49CDB077_7479_3FD2_41D0_44DA14F8F2C8",
 "left": "2%",
 "children": [
  "this.WebFrame_49CDD077_7479_3FD2_41CD_86311297C5F8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_49CDF077_7479_3FD2_4190_98C2D896BD4C",
 "left": "2%",
 "children": [
  "this.IconButton_49CD0078_7479_3FDE_41C6_833268668E41"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "88%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_723E77D5_7CC6_A88F_41C6_039A8FC74C78",
 "left": "2%",
 "children": [
  "this.WebFrame_722FC780_7CC6_A885_41CF_68CD5DF7D42A"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_73FFBCC0_7CC6_9886_41CE_B623B6A569CA",
 "left": "2%",
 "children": [
  "this.IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "88%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_73BB904D_7CC2_A79F_41C9_B53B537DE301",
 "left": "2%",
 "children": [
  "this.WebFrame_73A17FEF_7CC2_989A_41DA_18DD2E7B4E87"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_737EF99A_7CC2_B8BA_41B0_80F380D34B7C",
 "left": "2%",
 "children": [
  "this.IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "88%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_97908A47_859C_FDF6_41D8_D72B0E328DEA",
 "left": "2%",
 "children": [
  "this.WebFrame_978D59E4_859C_FEAA_41AA_D4AA8EC88AC3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_97BDD24A_8585_EDFE_41D8_D9425C5F2B6D",
 "left": "2%",
 "children": [
  "this.IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "88%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_901F26D0_8584_72EA_41C6_CBE72D92F1D6",
 "left": "2%",
 "children": [
  "this.WebFrame_9001469B_8584_729E_41CB_42FF86EB5F25"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_902D1456_8584_F596_41B1_320B5BD80C0A",
 "left": "2%",
 "children": [
  "this.IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "88%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_93840CAA_8584_56BE_41D0_201723BE99F9",
 "left": "2%",
 "children": [
  "this.WebFrame_93FBCC73_8584_55AE_41DA_0ED71E358F00"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "2%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_926F4D60_8584_77AA_41C6_92D935D1898E",
 "left": "2%",
 "children": [
  "this.IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Container",
 "top": "2%",
 "bottom": "88%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D7141705_FB8E_5DF5_4159_B2CCDD102E4B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D713E705_FB8E_5DF5_41C7_6471F85D6F36",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D713B706_FB8E_5DF7_41C1_E758355F8D84",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D7130706_FB8E_5DF7_41E0_6CAE60438AB2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D7145706_FB8E_5DF7_41E6_65FDF30DC74C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_6_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D7142706_FB8E_5DF7_41C2_FD4C427E7E4E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_14_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D7120707_FB8E_5DF5_41C6_05CECC20E575",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_24_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D71F4709_FB8E_5DFD_41E3_BA231B062270",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_26_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D71EE709_FB8E_5DFD_41E0_E339B619A5EB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_27_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D71EB709_FB8E_5DFD_41D4_4D7691CA049F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_28_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D71E770A_FB8E_5DFF_41E9_3EA70C4A417A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D71C570A_FB8E_5DFF_41B8_AAC19E10DE6B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D71C370B_FB8E_5DFD_41EA_23D3CE1BA4DB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D71B870B_FB8E_5DFD_41E4_6B866CF793C2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D71B570B_FB8E_5DFD_41C9_EE2B7A0E3C81",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_5_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D71AF70C_FB8E_5DFB_41E1_FD2A0F716C17",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_9_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D719E70C_FB8E_5DFB_41B5_211B16937FBC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_21_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D706970E_FB8E_5DF7_41ED_4F1B712E6BCE",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_24_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D705D70E_FB8E_5DF7_41DE_5E1D7D48554B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_25_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D705470F_FB8E_5DF5_41CF_0C926F0AEC5A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_26_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D705770F_FB8E_5DF5_41E1_14FADB5F08F6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D735F6F1_FB8E_5C2A_41D6_C441522A7318",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73556F1_FB8E_5C2A_41EE_1D8510391A13",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73516F1_FB8E_5C2A_41E0_A3425EE0D0E3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72D9700_FB8E_5DEB_41DF_9ED4E500C104",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72D0700_FB8E_5DEB_41E2_C6035E5AD4D7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72CD700_FB8E_5DEB_41E5_298F5C9661EA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72C9700_FB8E_5DEB_41DC_C58689A3441C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_5_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72C3701_FB8E_5DED_41C0_174E7DC9594A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_13_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72A7702_FB8E_5DEF_41B0_642725150EC4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_23_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D717B703_FB8E_5DED_41DE_E806BAD9A3FA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_25_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D716D703_FB8E_5DED_41ED_A6CB42CE23B3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_26_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D7168704_FB8E_5DEB_41EC_323E591F82F4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_27_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D7165704_FB8E_5DEB_41E8_C5B8C393B567",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D6C9F6EE_FB8E_5C36_41E0_4FE8FBCB5415",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D6C906EF_FB8E_5C36_41E6_36C40764812F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D6C8C6EF_FB8E_5C36_41CD_E2C1BDC3CE92",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_6_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D6C816EF_FB8E_5C36_41D9_3FC24A9DB41F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_7_0.png",
   "width": 500,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_D73746F0_FB8E_5C2A_41E2_6012CF1945C2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72566FB_FB8E_5C1D_41E9_D78690758FB7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72536FC_FB8E_5C1B_41EA_20C96F811CA8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D72496FC_FB8E_5C1B_41EA_9DAC5DF5404E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_4_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72426FC_FB8E_5C1B_41DA_70B909025BFA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_9_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72326FD_FB8E_5C15_41DF_C3FF7B0B5581",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_16_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72136FE_FB8E_5C17_41E8_9F2B9E0399A5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_17_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72FD6FE_FB8E_5C17_41E3_29A969AA0352",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73416F1_FB8E_5C2D_41D2_0C643E713596",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D733E6F1_FB8E_5C2D_41CB_7CE770CCD5C0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D733A6F1_FB8E_5C2D_41CD_642CCD782949",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73FA6F3_FB8E_5C2D_41C1_80BC9F5F515A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73F66F4_FB8E_5C2B_41E3_A6FDC0568362",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73F26F4_FB8E_5C2B_41EC_88BAFB322494",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D7034710_FB8E_5DEB_41C6_A9D19A7FCA30",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D7031710_FB8E_5DEB_41BA_FABDBDBFFEB9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D702F710_FB8E_5DEB_41B0_DA15FF224589",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D702B710_FB8E_5DEB_41DE_772E7F75D59B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_5_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D7022711_FB8E_5DED_41DB_1A4BCC88E600",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_15_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_D70FA712_FB8E_5DEF_41EE_A24225A919A8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_16_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D70F1712_FB8E_5DEF_41E6_836A4062A306",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73CD6F5_FB8E_5C15_41DF_4EB1EA6FB659",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73CB6F6_FB8E_5C17_41D2_33E6FCD2185B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73C76F6_FB8E_5C17_41E6_08D494D9BFDA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73BD6F6_FB8E_5C17_41E7_AAD802DC490F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73B86F6_FB8E_5C17_41E7_1D2F55F59BCC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73B26F7_FB8E_5C15_41E2_6678D4747EEF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_7_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D73A96F8_FB8E_5C1B_41D5_EB4A8B7BD6E6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_12_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D73B36F9_FB8E_5C1D_41CA_7041AC322D70",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_23_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D727C6FA_FB8E_5C1F_41DE_D5D47386FA15",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_24_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72796FA_FB8E_5C1F_41D4_2A17EB96A53B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_25_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72756FA_FB8E_5C1F_41E8_BC31CD2ABC19",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_26_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_D72726FB_FB8E_5C1D_41E7_6E79CB06F48F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73266F2_FB8E_5C2F_41E9_8C890731409F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D73226F2_FB8E_5C2F_41EC_6B4A2E1E6C84",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D731F6F2_FB8E_5C2F_41BA_082C2FE72EC4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "width": 130,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "iconHeight": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 0,
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "INFORMACI\u00d3N",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "backgroundOpacity": 0,
 "width": 120,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PERSPECTIVAS",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "backgroundOpacity": 0,
 "width": 98,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "UBICACI\u00d3N",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button location"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "backgroundOpacity": 0,
 "width": 69,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PLANOS",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button floorplan"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "backgroundOpacity": 0,
 "width": 98,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 14,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "CONTACTO",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0,
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button contact"
 },
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.shareTwitter('https://pnh.visitapy.com')",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.shareFacebook('https://pnh.visitapy.com')",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Cinzel Bold",
 "id": "Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
 "backgroundOpacity": 0,
 "width": 316,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "Panteón Nacional",
 "minHeight": 1,
 "propagateClick": true,
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "textShadowOpacity": 1,
 "height": 32,
 "minWidth": 1,
 "fontSize": "22px",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF"
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Cinzel Bold",
 "id": "Label_3B5B3C77_7457_47D2_41B5_B06EEEEF5C4D",
 "backgroundOpacity": 0,
 "width": 315,
 "textShadowColor": "#000000",
 "textShadowVerticalLength": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "text": "de los Hérores",
 "minHeight": 1,
 "propagateClick": true,
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "textShadowOpacity": 1,
 "height": 31,
 "minWidth": 1,
 "fontSize": "22px",
 "paddingTop": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 450,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.png",
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 90,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundOpacity": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemLabelFontColor": "#987B55",
 "itemVerticalAlign": "top",
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "ThumbnailGrid",
 "itemOpacity": 1,
 "height": "100%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#987B55",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#987B55",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "bold",
 "itemLabelGap": 7,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "borderRadius": 5,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "paddingRight": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#987B55",
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Times New Roman"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "backgroundOpacity": 1,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "99.97%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 90,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "paddingLeft": 10,
 "paddingRight": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 10,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.51,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "backgroundOpacity": 0,
 "width": 60,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "height": 60,
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.png",
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_49CDD077_7479_3FD2_41CD_86311297C5F8",
 "backgroundOpacity": 1,
 "width": "100.034%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://pnh.visitapy.com/info/josefelix.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.972%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_49CD0078_7479_3FDE_41C6_833268668E41",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_49CD0078_7479_3FDE_41C6_833268668E41_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_49CD0078_7479_3FDE_41C6_833268668E41.jpg",
 "pressedIconURL": "skin/IconButton_49CD0078_7479_3FDE_41C6_833268668E41_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_722FC780_7CC6_A885_41CF_68CD5DF7D42A",
 "backgroundOpacity": 1,
 "width": "100.034%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://pnh.visitapy.com/info/franciscosolano.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.972%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD.jpg",
 "pressedIconURL": "skin/IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_73A17FEF_7CC2_989A_41DA_18DD2E7B4E87",
 "backgroundOpacity": 1,
 "width": "100.034%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://pnh.visitapy.com/info/carlosantonio.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.972%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_978D59E4_859C_FEAA_41AA_D4AA8EC88AC3",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://pnh.visitapy.com/info/josegaspar.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6.jpg",
 "pressedIconURL": "skin/IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_9001469B_8584_729E_41CB_42FF86EB5F25",
 "backgroundOpacity": 1,
 "width": "100.034%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://pnh.visitapy.com/info/roquegonzalez.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.972%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22.jpg",
 "pressedIconURL": "skin/IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_93FBCC73_8584_55AE_41DA_0ED71E358F00",
 "backgroundOpacity": 1,
 "width": "100.034%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://pnh.visitapy.com/info/juanpablo.html",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.972%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA",
 "backgroundOpacity": 0,
 "width": "25%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA_rollover.jpg",
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA.jpg",
 "pressedIconURL": "skin/IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 897,
 "maxWidth": 1337,
 "id": "Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "url": "skin/Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image72337"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": true,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": 60,
 "right": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "top": 20,
 "height": 60,
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.5634029467365!2d-57.63561062921791!3d-25.282058030471635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7f2358d412f%3A0x4ad538d9d71078e!2sPante%C3%B3n%20Nacional%20de%20los%20H%C3%A9roes%20y%20Oratorio%20de%20la%20Virgen%20Nuestra%20Se%C3%B1ora%20Santa%20Mar%C3%ADa%20de%20la%20Asunci%C3%B3n!5e0!3m2!1ses-419!2spy!4v1578215909351!5m2!1ses-419!2spy",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "class": "WebFrame",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "propagateClick": true,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 36,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Cinzel Bold';\"><B>floorplan/</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": 60,
 "right": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.png",
 "propagateClick": true,
 "class": "IconButton",
 "top": 20,
 "height": 60,
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.png",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.png",
 "data": {
  "name": "IconButton54739"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 897,
 "maxWidth": 1337,
 "id": "Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "url": "skin/Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image71348"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 40,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "right"
},
{
 "scrollBarOpacity": 0.79,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
  "this.Button_0DECFFED_12FA_D26D_419B_F907711405D7"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "vertical",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "2.54%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0,
 "id": "Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "30%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "scrollBarVisible": "always",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "75%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 20,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0,
 "id": "Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "44%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container header contact"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "backgroundOpacity": 1,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "height": 7,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container25772"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>Rholand Bucci</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\">Este proyecto es una demostraci\u00f3n del futuro del turismo internacional. Es un Paseo Digital en constante evoluci\u00f3n, por ende, todo contenido desplegado aqu\u00ed est\u00e1 bajo mejora constante.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>CONTACTO:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"mailto:rholand@rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>rholand@rbucci.com</U></SPAN></A></SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>www.rbucci.com</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://api.whatsapp.com/send?phone=595981408400&amp;text=Hola, me gustÃ³ el Paseo Digital del PanteÃ³n!\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>+595 981 408 400</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "horizontalAlign": "center",
 "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
 "backgroundOpacity": 1,
 "width": "35%",
 "shadowColor": "#000000",
 "fontFamily": "Antonio",
 "gap": 5,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 30,
 "class": "Button",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20gust%C3%B3%20el%20Paseo%20Digital%20del%20Pante%C3%B3n!', '_blank')",
 "backgroundColor": [
  "#25D366"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "12%",
 "fontSize": "3.26vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "label": "WhatsApp",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "HTMLText",
 "bottom": "18.77%",
 "height": "60.825%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.82vh;font-family:'Cinzel Bold';\"><B>Pante\u00f3n Nacional de los H\u00e9roes</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#996633",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "left": "0.19%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "right": "0.19%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "bottom": "14.08%",
 "height": 7,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.8vh;font-family:'Antonio';\"><B>Historia</B></SPAN><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Open Sans Semibold';\">En octubre de 1863, el entonces presidente de la Rep\u00fablica Francisco Solano L\u00f3pez, orden\u00f3 la construcci\u00f3n del oratorio de la Virgen de la Asunci\u00f3n, fue dise\u00f1ada por el arquitecto italiano Alejandro Ravizza, en colaboraci\u00f3n con el constructor Gi\u00e1como Colombino. Pero, a consecuencia de la Guerra de la Triple Alianza, el edificio qued\u00f3 inconcluso y sobre andamios durante m\u00e1s de 70 a\u00f1os. Reci\u00e9n despu\u00e9s de la Guerra del Chaco en 1936 se pudo terminar y fue inaugurado el 12 de octubre del mismo a\u00f1o, para convertirlo por decreto presidencial en Pante\u00f3n Nacional de los H\u00e9roes.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "backgroundOpacity": 0,
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "HTMLText",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Open Sans Semibold';\">Por presi\u00f3n de la jerarqu\u00eda eclesi\u00e1stica y ciudadanos devotos de la Virgen, que es considerada hasta ahora Patrona del Paraguay y Mariscala de sus Ej\u00e9rcitos, el Dr. F\u00e9lix Paiva se ve obligado a restituir el Oratorio a la Virgen de la Asunci\u00f3n en 1937 y al mismo tiempo continu\u00f3 siendo Pante\u00f3n Nacional de los H\u00e9roes. Por el Decreto N\u00b0 895/1993 del Arzobispado de Asunci\u00f3n, se nombr\u00f3 a Monse\u00f1or An\u00edbal Rachid Rector del Oratorio Nuestra Se\u00f1ora de la Asunci\u00f3n y por ende del Pante\u00f3n Nacional.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#987B55",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0,
 "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "class": "HTMLText",
 "top": 0,
 "height": "100%",
 "minWidth": 1,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Cinzel Bold';\"><B>CONTACT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:10.74vh;font-family:'Cinzel Bold';\"><B>INFO</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#BBD149",
 "data": {
  "name": "HTMLText23803"
 },
 "shadow": false
}],
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
