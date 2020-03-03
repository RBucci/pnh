(function(){
	var script = {
 "mouseWheelEnabled": true,
 "borderRadius": 0,
 "class": "Player",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'from' : 'to')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; }
 },
 "left": 577.55,
 "gap": 10,
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
 "horizontalAlign": "left",
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 20,
 "layout": "absolute",
 "desktopMipmappingEnabled": false,
 "start": "this.playAudioList([this.audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23, this.audio_51363033_7D42_A78A_41D2_25B2C2928D11, this.audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9]); this.init(); this.initGA(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist]); this.playList_BA4F87A8_9E1F_EC2F_41C7_850A35765771.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "contentOpaque": false,
 "downloadEnabled": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "definitions": [{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3628,
   "height": 5697
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2608,
   "height": 4096
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1304,
   "height": 2048
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 652,
   "height": 1024
  },
  {
   "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_36DA5444_7449_4736_41C6_9EE93A6F222A"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1226,
   "height": 1920
  },
  {
   "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 653,
   "height": 1024
  },
  {
   "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_3D3B8A66_7F46_9B8A_41D3_0C5D1807C52C"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6BA335F7_7CC7_A88B_41DB_CCA2711C24E8",
 "easing": "linear"
},
{
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": -69.81,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -59.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.58
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.3,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.5
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 16.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 49.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 11.93,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.32
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 2500,
   "easing": "cubic_in_out",
   "targetHfov": 75,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "targetPitch": 36.47
  }
 ],
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -69.81,
  "pitch": 36.47
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.56,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_37B06473_75C8_C7D2_41D9_A6490CEFC935",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 652,
    "height": 1024
   }
  ]
 },
 "pitch": 6.84,
 "popupMaxWidth": "95%",
 "yaw": -72.67,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.42,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 6.76,
 "popupMaxWidth": "95%",
 "yaw": 144.29,
 "showDuration": 500
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E.ogg"
 },
 "id": "audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E",
 "data": {
  "label": "Himno Nacional del Paraguay-p-59Cb9duyE"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 8.45,
    "targetYaw": -1.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 15.97,
    "targetPitch": 22.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 76.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.75
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 131.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.44
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 177.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 40.26
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -119.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -77.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 23.43
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BACE1839_9E1F_E420_41D3_B6E638379DB0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -30.85,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA"
 ],
 "class": "Container",
 "id": "Container_926F4D60_8584_77AA_41C6_92D935D1898E",
 "left": "2%",
 "scrollBarColor": "#000000",
 "right": "2%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "88%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 5885,
   "height": 3923
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2730
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_5E2125EB_7CC1_A89A_41D7_E9962AEEA7B8"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 5845,
   "height": 3897
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2730
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_5E2525DB_7CC1_A8BA_41B9_FEEB5D193E7A"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_37B91467_75C8_C7F2_41D3_21C3C32CBCD2",
 "easing": "linear"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.09,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_47001AD2_7F42_9885_41B9_403B7B62136B",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 653,
    "height": 1024
   }
  ]
 },
 "pitch": 4.33,
 "popupMaxWidth": "95%",
 "yaw": -0.54,
 "showDuration": 500
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6EB60D2A_78DF_E22B_41DA_59F22F850E4B",
 "easing": "linear"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.08,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 14.12,
 "popupMaxWidth": "95%",
 "yaw": -106.35,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.63,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_57BD21E6_7D42_A88A_41DD_386A14969465",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 40.6,
 "popupMaxWidth": "95%",
 "yaw": 107.53,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.06,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 652,
    "height": 1024
   }
  ]
 },
 "pitch": 5.76,
 "popupMaxWidth": "95%",
 "yaw": -120.54,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.06,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -15.51,
 "popupMaxWidth": "95%",
 "yaw": -9.19,
 "showDuration": 500
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6B5BAFD5_7CC6_988F_41D8_4DCF040E46DD",
 "easing": "linear"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.42,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_550D4797_7D42_A88A_41B4_91E4E9A86D12",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 5.11,
 "popupMaxWidth": "95%",
 "yaw": -160.29,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 36,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Otama.ep';\"><B>PANORAMA LIST:</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.89,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_44EC61FE_7F41_E87A_41C4_785622A36C4B",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -7.26,
 "popupMaxWidth": "95%",
 "yaw": -67.76,
 "showDuration": 500
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3628,
   "height": 5697
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2608,
   "height": 4096
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1304,
   "height": 2048
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 652,
   "height": 1024
  },
  {
   "url": "media/popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_6EFB311C_7948_A3E8_41D6_721F2868B881"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 106.5,
    "targetYaw": -1.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 212.99,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_806F39B9_9E1F_E420_4190_3B303E150C80",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 114.75,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "gap": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "scrollBarColor": "#000000",
 "height": 40,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 32.66,
    "targetYaw": -9.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 64.61,
    "targetPitch": -12.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.67,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.17,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 41.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -8.92,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 58.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 77.75,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.14
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 145.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.16,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.35
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -120.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -121.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -53.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.13
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BE87BDA7_9E1F_FC20_41A6_55DDA8390B06",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -70.43,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
 "left": "0.19%",
 "backgroundColorRatios": [
  0
 ],
 "right": "0.19%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "14.08%",
 "height": 7,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB",
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_907FBE4C_859F_F5FB_418B_39BD5CD908E7",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 94.31,
    "targetYaw": -0.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 188.48,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 29.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.97,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 103.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 175.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -140.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.03
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -108.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.9
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -68.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -3.45
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -71.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 29.46
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80D3EB16_9E1F_E5E3_41A2_27591066392B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -180,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6"
 ],
 "class": "Container",
 "id": "Container_97BDD24A_8585_EDFE_41D8_D9425C5F2B6D",
 "left": "2%",
 "scrollBarColor": "#000000",
 "right": "2%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "88%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "textShadowColor": "#000000",
 "class": "Label",
 "id": "Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
 "width": 316,
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "Panteón Nacional",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "minWidth": 1,
 "fontSize": "22px",
 "height": 32,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 0,
 "textShadowBlurRadius": 10,
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "textShadowOpacity": 1,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "paddingTop": 0,
 "textDecoration": "none",
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.42,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 7.5,
 "popupMaxWidth": "95%",
 "yaw": -30.51,
 "showDuration": 500
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BA4FB7A9_9E1F_EC21_41E0_7E9BB5D6FFA1, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BA4FB7A9_9E1F_EC21_41E0_7E9BB5D6FFA1, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_90157D98_8203_4A20_41CC_67A9FA2D574A",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BA4FB7A9_9E1F_EC21_41E0_7E9BB5D6FFA1"
},
{
 "borderRadius": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "gap": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "scrollBarColor": "#000000",
 "height": 40,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3
},
{
 "borderRadius": 0,
 "maxHeight": 897,
 "class": "Image",
 "id": "Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21",
 "left": "0%",
 "width": "100%",
 "maxWidth": 1337,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image72337"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 0.99,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6EBEED2B_78DF_E228_419E_876D9449DEE3",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 652,
    "height": 1024
   }
  ]
 },
 "pitch": 3.85,
 "popupMaxWidth": "95%",
 "yaw": -0.63,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "vertical",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "7%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "visible",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
  "this.Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--CONTACT"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 1788
  },
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1220
  },
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 610
  },
  {
   "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 305
  }
 ],
 "id": "ImageResource_4EF1D05F_7D43_A7BB_41A2_33C857274DFB"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 2000
  },
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_57BD21E6_7D42_A88A_41DD_386A14969465_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_4EE00053_7D43_A78B_4190_49F82A4ABB2E"
},
{
 "borderRadius": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
 "layout": "horizontal",
 "width": 370,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "2.54%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3
},
{
 "itemLabelFontWeight": "bold",
 "itemBackgroundOpacity": 0,
 "class": "ThumbnailGrid",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemPaddingTop": 3,
 "itemHeight": 156,
 "width": "100%",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#987B55",
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "selectedItemLabelFontColor": "#987B55",
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowColor": "#987B55",
 "paddingLeft": 70,
 "borderSize": 0,
 "itemVerticalAlign": "top",
 "minHeight": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelGap": 7,
 "minWidth": 1,
 "itemLabelFontColor": "#666666",
 "itemMinWidth": 50,
 "height": "100%",
 "itemLabelPosition": "bottom",
 "propagateClick": true,
 "itemLabelFontStyle": "normal",
 "itemLabelFontSize": 14,
 "shadow": false,
 "itemMode": "normal",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "borderRadius": 5,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColor": [],
 "paddingRight": 70,
 "itemOpacity": 1,
 "itemThumbnailHeight": 125,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist",
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailShadow": false,
 "itemMaxWidth": 1000,
 "itemWidth": 220,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemLabelFontFamily": "Times New Roman",
 "paddingBottom": 70,
 "itemThumbnailOpacity": 1,
 "itemLabelTextDecoration": "none",
 "itemMinHeight": 50,
 "scrollBarVisible": "rollOver",
 "itemBorderRadius": 0,
 "scrollBarOpacity": 0.5,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontWeight": "bold",
 "verticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarMargin": 2,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemMaxHeight": 1000,
 "data": {
  "name": "ThumbnailList5161"
 },
 "rollOverItemThumbnailShadow": true,
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#987B55",
 "selectedItemThumbnailShadowHorizontalLength": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1920,
   "height": 1280
  },
  {
   "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_3D422A6F_7F46_9B9A_41DF_1CDCABD2E350"
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.shareSocial('tw', 'https://pnh.visitapy.com', false)",
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 29.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.97,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 103.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 175.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -140.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.03
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -108.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.9
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -68.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -3.45
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -71.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 29.46
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -0.5,
  "pitch": 2.51
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_73BB904D_7CC2_A79F_41C9_B53B537DE301",
  "this.Container_737EF99A_7CC2_B8BA_41B0_80F380D34B7C"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--CA L\u00f3pez"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 2000
  },
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_4EF1705D_7D43_A7BF_41B6_B292ACADAED5"
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 4",
 "id": "panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
 "adjacentPanoramas": [
  {
   "backwardYaw": -36.43,
   "class": "AdjacentPanorama",
   "yaw": -149.4,
   "distance": 1,
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6"
  },
  {
   "backwardYaw": 120.87,
   "class": "AdjacentPanorama",
   "yaw": -121.03,
   "distance": 1,
   "panorama": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A"
  },
  {
   "backwardYaw": -84.79,
   "class": "AdjacentPanorama",
   "yaw": 42.12,
   "distance": 1,
   "panorama": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_t.jpg"
  }
 ],
 "hfovMin": "140%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": -29.65,
   "y": 734.1,
   "x": 1380.4
  }
 ],
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
 "partial": false
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 1788
  },
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1220
  },
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 610
  },
  {
   "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 305
  }
 ],
 "id": "ImageResource_4EE98058_7D43_A785_4191_69DE0063FA42"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_921753EC_8584_52BA_41E0_5462D2E16D21",
 "easing": "linear"
},
{
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "class": "Window",
 "id": "window_653F64CA_7748_E268_41D1_CBE77F2670A8",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "width": 1200,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBorderSize": 0,
 "gap": 10,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "bodyBorderColor": "#000000",
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 5,
 "headerPaddingRight": 10,
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "bold",
 "modal": true,
 "height": 800,
 "minWidth": 20,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColor": [],
 "title": "Historia del Pante\u00f3n",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "veilOpacity": 0.4,
 "headerBackgroundOpacity": 1,
 "bodyPaddingLeft": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "closeButtonBackgroundColor": [],
 "headerVerticalAlign": "middle",
 "shadow": true,
 "titleTextDecoration": "none",
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "titlePaddingTop": 5,
 "backgroundOpacity": 1,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "borderRadius": 5,
 "shadowBlurRadius": 6,
 "headerBorderSize": 0,
 "titleFontFamily": "Arial",
 "children": [
  "this.htmlText_653B74D3_7748_E278_41B9_7B961B2A4E9D"
 ],
 "closeButtonIconHeight": 12,
 "backgroundColorRatios": [],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonIconLineWidth": 2,
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingRight": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 10,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyBackgroundOpacity": 1,
 "footerHeight": 5,
 "footerBackgroundColorDirection": "vertical",
 "titleFontStyle": "normal",
 "headerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "titleFontSize": "3vmin",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "headerPaddingTop": 10,
 "overflow": "scroll",
 "shadowSpread": 1,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window2883"
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.3,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_54273946_7D4F_B98A_41DA_F36DBD50FE18",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 14.96,
 "popupMaxWidth": "95%",
 "yaw": -95.38,
 "showDuration": 500
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3628,
   "height": 5697
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2608,
   "height": 4096
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1304,
   "height": 2048
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 652,
   "height": 1024
  },
  {
   "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_6EF8867C_7948_AE2F_41D0_CA23B9123B0D"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1920,
   "height": 1280
  },
  {
   "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_44EC61FE_7F41_E87A_41C4_785622A36C4B_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_3D416A70_7F46_9B86_41BC_7292B36898FB"
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 23.38,
    "targetYaw": -9.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 45.98,
    "targetPitch": -12.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.67,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.17,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 41.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -8.92,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 58.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 77.75,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.14
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 145.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.16,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.35
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -120.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -121.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -53.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.13
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_81DF7C7C_9E1F_FC27_41D4_AAFB7FA8C997",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 32.65,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.34,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_483359CE_75BB_4132_41C8_2385EBA46B9F",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 652,
    "height": 1024
   }
  ]
 },
 "pitch": 9.77,
 "popupMaxWidth": "95%",
 "yaw": 178.7,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.46,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 9.31,
 "popupMaxWidth": "95%",
 "yaw": -29.9,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "Button",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "shadowBlurRadius": 15,
 "width": 120,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "label": "PERSPECTIVAS",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button panorama list"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 9.88,
    "targetYaw": 27.76,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 18.84,
    "targetPitch": 2.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -4.65,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 33.29,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 61.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 75.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -172.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -134.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.53,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.82
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BE1ABCB8_9E1F_FC20_41C5_DD025E36706A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 58.97,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 5845,
   "height": 3897
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2730
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_5E2545DB_7CC1_A8BA_41D2_EDDFD86F9268"
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_51363033_7D42_A78A_41D2_25B2C2928D11.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_51363033_7D42_A78A_41D2_25B2C2928D11.ogg"
 },
 "id": "audio_51363033_7D42_A78A_41D2_25B2C2928D11",
 "data": {
  "label": "Inspiring Piano"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_550D4797_7D42_A88A_41B4_91E4E9A86D12_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_540EEBCD_7D46_989E_41B8_F8DE7501ABE6"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD"
 ],
 "class": "Container",
 "id": "Container_73FFBCC0_7CC6_9886_41CE_B623B6A569CA",
 "left": "2%",
 "scrollBarColor": "#000000",
 "right": "2%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "88%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BA4FF7A9_9E1F_EC21_41B0_4043C3A3AA83, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BA4FF7A9_9E1F_EC21_41B0_4043C3A3AA83, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_8D1816BF_835D_0EB5_41C0_020C81D2D133",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BA4FF7A9_9E1F_EC21_41B0_4043C3A3AA83"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_420A19D6_7DCE_B88A_41D1_A3FEA33A687B"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.14,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_563C1494_7DC2_A88D_41DD_BA8C2553B005",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 15.42,
 "popupMaxWidth": "95%",
 "yaw": 105.22,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 71.26,
    "targetYaw": -0.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 142.18,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 29.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.97,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 103.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 175.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -140.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.03
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -108.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.9
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -68.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -3.45
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -71.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 29.46
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_809E7AA1_9E1F_E421_41DC_D4FBD63129F7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -135.66,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.shareSocial('fb', 'https://pnh.visitapy.com', false)",
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "class": "Window",
 "id": "window_79C4972F_7748_AE29_41D3_D5203F685831",
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "width": 800,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "bodyBorderSize": 0,
 "gap": 5,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "horizontalAlign": "center",
 "titlePaddingLeft": 5,
 "paddingLeft": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "bodyBorderColor": "#000000",
 "minHeight": 20,
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingTop": 5,
 "headerPaddingRight": 10,
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "bold",
 "modal": true,
 "height": 600,
 "minWidth": 20,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColor": [],
 "title": "Breve rese\u00f1a del Paraguay",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "shadowOpacity": 0.5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "veilOpacity": 0.4,
 "headerBackgroundOpacity": 1,
 "bodyPaddingLeft": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "closeButtonBackgroundColor": [],
 "headerVerticalAlign": "middle",
 "shadow": true,
 "titleTextDecoration": "none",
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "titlePaddingTop": 5,
 "backgroundOpacity": 1,
 "closeButtonIconWidth": 12,
 "closeButtonPressedIconColor": "#FFFFFF",
 "borderRadius": 5,
 "shadowBlurRadius": 6,
 "headerBorderSize": 0,
 "titleFontFamily": "Arial",
 "children": [
  "this.htmlText_79C4A72F_7748_AE29_41D5_D8131A239EC2"
 ],
 "closeButtonIconHeight": 12,
 "backgroundColorRatios": [],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonIconLineWidth": 2,
 "shadowColor": "#000000",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingRight": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 10,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyBackgroundOpacity": 1,
 "footerHeight": 5,
 "footerBackgroundColorDirection": "vertical",
 "titleFontStyle": "normal",
 "headerBackgroundColorDirection": "vertical",
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "headerBorderColor": "#000000",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "titleFontSize": "2vmin",
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "titleFontColor": "#000000",
 "closeButtonIconColor": "#000000",
 "veilColorDirection": "horizontal",
 "headerPaddingTop": 10,
 "overflow": "scroll",
 "shadowSpread": 1,
 "paddingTop": 0,
 "titlePaddingRight": 5,
 "scrollBarMargin": 2,
 "data": {
  "name": "Window2883"
 }
},
{
 "borderRadius": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ],
 "width": "100%",
 "gap": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "height": 7,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container25772"
 },
 "backgroundOpacity": 1
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.51,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 27.63,
 "popupMaxWidth": "95%",
 "yaw": -175.34,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.76,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 16.41,
 "popupMaxWidth": "95%",
 "yaw": 77.89,
 "showDuration": 500
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3628,
   "height": 5697
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2608,
   "height": 4096
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1304,
   "height": 2048
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 652,
   "height": 1024
  },
  {
   "url": "media/popup_6EBEED2B_78DF_E228_419E_876D9449DEE3_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_6EBEFD2B_78DF_E228_41D9_86556289A261"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1226,
   "height": 1920
  },
  {
   "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 653,
   "height": 1024
  },
  {
   "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_3D296A5C_7F46_9BBE_41CB_DED7AC8E13AB"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4696
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2616,
   "height": 4096
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1308,
   "height": 2048
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 654,
   "height": 1024
  },
  {
   "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 327,
   "height": 512
  }
 ],
 "id": "ImageResource_423619C0_7DCE_B886_41B8_9D89B19B5E95"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_901F26D0_8584_72EA_41C6_CBE72D92F1D6",
  "this.Container_902D1456_8584_F596_41B1_320B5BD80C0A"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--Beato Roque"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 0.94,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 653,
    "height": 1024
   }
  ]
 },
 "pitch": 6.03,
 "popupMaxWidth": "95%",
 "yaw": 102.69,
 "showDuration": 500
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1226,
   "height": 1920
  },
  {
   "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 653,
   "height": 1024
  },
  {
   "url": "media/popup_47001AD2_7F42_9885_41B9_403B7B62136B_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_3D43EA6E_7F46_9B9A_41D7_AF559CF80C20"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 56.89,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 113.3,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -22.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -31.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 22.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.74
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.24,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 12.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -31.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.86
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 30.27,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 9.11
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 15.39
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80A52A60_9E1F_E420_41D6_7CCBE2D2A4F8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 137.67,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 54.57,
    "targetYaw": -69.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 108.65,
    "targetPitch": 36.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -59.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.58
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.3,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.5
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 16.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 49.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 11.93,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.32
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80466A1C_9E1F_E7E7_41C2_3F31CF5DA18E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 58.39,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6B576BFF_7CC1_987A_41D4_F423817BBAB3",
 "easing": "linear"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
  "this.Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
  "this.Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
 "layout": "vertical",
 "width": "50%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "horizontalAlign": "left",
 "paddingLeft": 60,
 "paddingRight": 60,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "minWidth": 450,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_97908A47_859C_FDF6_41D8_D72B0E328DEA",
  "this.Container_97BDD24A_8585_EDFE_41D8_D9425C5F2B6D"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_940A84D7_859C_5696_41D3_DFA64C65F768",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--JGR de Francia"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_54097BC9_7D46_9886_41C3_47E3B4083276"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 5.52,
    "targetYaw": -1.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 10.08,
    "targetPitch": 22.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 76.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.75
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 131.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.44
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 177.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 40.26
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -119.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -77.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 23.43
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_81887C1C_9E1F_E3E0_41BB_EFD23C1599D9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -0.57,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
 "left": "0%",
 "scrollBarColor": "#996633",
 "right": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "bottom": "18.77%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0,
 "height": "60.825%",
 "propagateClick": true,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.82vh;font-family:'Cinzel Bold';\"><B>Pante\u00f3n Nacional de los H\u00e9roes</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 2.02,
    "targetYaw": 27.76,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 3.06,
    "targetPitch": 2.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -4.65,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 33.29,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 61.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 75.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -172.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -134.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.53,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.82
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_81AE4BFC_9E1F_E427_41DC_B4C06EBC9D8A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 30.6,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_482879CD_75BB_4136_41D7_757E609EE41F",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -4.65,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 33.29,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 61.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 75.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -172.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -134.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.53,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.82
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7E911130_7321_FD7E_41C8_3413131F93CA_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 27.76,
  "pitch": 2.23
 }
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_1813DA3E_1663_8BF1_4193_F28A53801FBC"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
 "left": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "10%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 106.46,
    "targetYaw": -1.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 212.91,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BE470D19_9E1F_FDE1_41CF_3EC9752D53ED",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -117.22,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.61,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 652,
    "height": 1024
   }
  ]
 },
 "pitch": 26.6,
 "popupMaxWidth": "95%",
 "yaw": -1.45,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarColor": "#000000",
 "paddingLeft": 80,
 "paddingRight": 0,
 "minHeight": 100,
 "borderSize": 0,
 "top": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 36,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.58vh;font-family:'Cinzel Bold';\"><B>floorplan/</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_563C1494_7DC2_A88D_41DD_BA8C2553B005_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_4207C9CD_7DCE_B89E_41CF_CC1568025D16"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.6,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5695574B_7D41_A99A_41D7_21C661FD19EE",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 41.48,
 "popupMaxWidth": "95%",
 "yaw": -66.16,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 48.03,
    "targetYaw": 27.76,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 95.49,
    "targetPitch": 2.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -4.65,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 33.29,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 61.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 75.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -172.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -134.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.53,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.82
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BF6D4EC6_9E1F_FC63_41DF_5020B1E5CCC3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -137.88,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_49CD0078_7479_3FDE_41C6_833268668E41"
 ],
 "class": "Container",
 "id": "Container_49CDF077_7479_3FD2_4190_98C2D896BD4C",
 "left": "2%",
 "scrollBarColor": "#000000",
 "right": "2%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "88%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_422B29BE_7DCE_B8FA_41CC_273190D1929F"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_49C55C9B_7449_4752_41D5_778AD11FD3A0",
 "easing": "linear"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BA4097A9_9E1F_EC21_41D0_75544B2588A9, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BA4097A9_9E1F_EC21_41D0_75544B2588A9, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_92F572DC_8343_06FB_41CF_864C3CA67A6B",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BA4097A9_9E1F_EC21_41D0_75544B2588A9"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.24,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 35.25,
 "popupMaxWidth": "95%",
 "yaw": 3.14,
 "showDuration": 500
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 3",
 "id": "panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
 "adjacentPanoramas": [
  {
   "backwardYaw": -11.93,
   "class": "AdjacentPanorama",
   "yaw": 132.83,
   "distance": 1,
   "panorama": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA"
  },
  {
   "backwardYaw": -121.61,
   "class": "AdjacentPanorama",
   "yaw": 126.77,
   "distance": 1,
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": -22.88,
   "y": 1291.2,
   "x": 101.82
  }
 ],
 "overlays": [
  "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_tcap0",
  "this.overlay_63012C92_7321_0B22_41B4_8548FFA07AC7",
  "this.overlay_5CE08A41_7449_C331_41D9_E06B6BABA738",
  "this.overlay_530347E1_7448_C0EE_41D6_D62CD5FDA849",
  "this.overlay_5EEA6E2F_7448_C372_41B8_F90221DD1398"
 ],
 "partial": false
},
{
 "borderRadius": 0,
 "children": [
  "this.WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
 "layout": "absolute",
 "width": "99.97%",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "horizontalAlign": "center",
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 48.99,
    "targetYaw": -5.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 97.43,
    "targetPitch": 6.28
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -46.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 51.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 53.57
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 50.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 115.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 74.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -166.94,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -0.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 54.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -63.94,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 30.46
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -6.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.08
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_808B9A80_9E1F_E4E0_41BF_28BDE2FC851A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 174.29,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.14,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6B81FAD8_7CC2_B886_4192_33E86037436A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -3.27,
 "popupMaxWidth": "95%",
 "yaw": -9.1,
 "showDuration": 500
},
{
 "borderRadius": 10,
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3.26vh",
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=Hola,%20me%20gust%C3%B3%20el%20Paseo%20Digital%20del%20Pante%C3%B3n!', '_blank')",
 "class": "Button",
 "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
 "shadowBlurRadius": 6,
 "width": "35%",
 "shadowColor": "#000000",
 "fontFamily": "Antonio",
 "backgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "layout": "horizontal",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#25D366"
 ],
 "paddingBottom": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "label": "WhatsApp",
 "fontStyle": "normal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": "12%",
 "iconHeight": 32,
 "data": {
  "name": "Button31015"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 23.87,
    "targetYaw": -2.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 46.95,
    "targetPitch": 1.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 15.45,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.87
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 20.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.98
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 55.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.82
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 43.27
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 101.87,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 114.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 120.71,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_8145BBDD_9E1F_E461_41C9_2BE4E7728FC9",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -30.2,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.82,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 74.15,
 "popupMaxWidth": "95%",
 "yaw": 13.77,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.04,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 5.69,
 "popupMaxWidth": "95%",
 "yaw": 19.79,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 108,
    "targetYaw": -1.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 216,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BAD69876_9E1F_E423_41D5_169BBFC39ABE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 179.58,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 2.41,
    "targetYaw": -0.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 3.83,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 29.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.97,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 103.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 175.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -140.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.03
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -108.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.9
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -68.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -3.45
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -71.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 29.46
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80152998_9E1F_E4E0_41D5_BAA52D875FD7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 0.5,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_722FC780_7CC6_A885_41CF_68CD5DF7D42A"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_723E77D5_7CC6_A88F_41C6_039A8FC74C78",
 "left": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "2%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "2%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_73E32C81_7CC6_9886_41AB_B92244F803AD",
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 1,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 1,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -22.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -31.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 22.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.74
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.24,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 12.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -31.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.86
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 30.27,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 9.11
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 15.39
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BEA70D53_9E1F_FC60_41D1_D91B953FD9FB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9.ogg"
 },
 "id": "audio_51637A08_7D42_BB86_41D7_7C9AE76D62B9",
 "data": {
  "label": "Inspiring Uplifting Emotional Piano"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 15.45,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.87
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 20.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.98
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 55.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.82
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 43.27
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 101.87,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 114.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 120.71,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -2.01,
  "pitch": 1.51
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 33.24,
    "targetYaw": -9.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 65.78,
    "targetPitch": -12.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.67,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.17,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 41.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -8.92,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 58.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 77.75,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.14
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 145.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.16,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.35
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -120.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -121.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -53.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.13
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_807C09DA_9E1F_E463_41C6_58E8FC149FC0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 52.49,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BA4F27A9_9E1F_EC21_41E1_393775AF8A69, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BA4F27A9_9E1F_EC21_41E1_393775AF8A69, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_93D6985C_834F_01F4_41DB_6D3F1D40F66C",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BA4F27A9_9E1F_EC21_41E1_393775AF8A69"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
 "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.png",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": true,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 108,
    "targetYaw": -1.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 216,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_8139EB39_9E1F_E421_41D6_580A05C24A44",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -130.7,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.69,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_55530E52_7D41_7B85_41D3_D21BAEE45E56",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 15.35,
 "popupMaxWidth": "95%",
 "yaw": 103.81,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "gap": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "height": 90,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "backgroundOpacity": 0.3
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 52.13,
    "targetYaw": -69.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 103.74,
    "targetPitch": 36.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -59.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.58
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.3,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.5
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 16.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 49.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 11.93,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.32
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BE790CD6_9E1F_FC60_41E2_878D2D4E5D46",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 52.06,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 1788
  },
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1220
  },
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 610
  },
  {
   "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 305
  }
 ],
 "id": "ImageResource_4EE35054_7D43_A78D_4194_A14BEA529F2E"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
 "left": "10%",
 "right": "10%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "borderSize": 0,
 "minHeight": 1,
 "top": "5%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "84.02%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.2,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 55.91,
 "popupMaxWidth": "95%",
 "yaw": -17.77,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 108,
    "targetYaw": 97.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 216,
    "targetPitch": 9.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 113.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 115.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -2.2
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_817E8BBD_9E1F_E420_41CD_67F63221EE5B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -53.23,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 66.95,
    "targetYaw": -0.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 133.53,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 29.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.97,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 103.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 175.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -140.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.03
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -108.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.9
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -68.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -3.45
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -71.72,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 29.46
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BAFAA802_9E1F_E3E3_41C3_E862E66B8E57",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 126.36,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
 "left": "0%",
 "scrollBarColor": "#BBD149",
 "right": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "top": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "HTMLText23803"
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.93vh;font-family:'Cinzel Bold';\"><B>CONTACT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:10.74vh;font-family:'Cinzel Bold';\"><B>INFO</B></SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_974BE1EC_8585_EEBA_41E0_34BF950A4AE6",
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 108,
    "targetYaw": -2.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 216,
    "targetPitch": 1.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 15.45,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.87
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 20.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.98
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 55.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.82
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 43.27
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 101.87,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 114.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 120.71,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_807739FB_9E1F_E421_41A3_CE372D37E526",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 168.07,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_73A17FEF_7CC2_989A_41DA_18DD2E7B4E87"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_73BB904D_7CC2_A79F_41C9_B53B537DE301",
 "left": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "2%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "2%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_9001469B_8584_729E_41CB_42FF86EB5F25"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_901F26D0_8584_72EA_41C6_CBE72D92F1D6",
 "left": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "2%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "2%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 370,
 "gap": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": 40,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "backgroundOpacity": 0.3
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.41,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_57126416_7DCF_AF8A_41AA_AB184A6512A2",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 9.23,
 "popupMaxWidth": "95%",
 "yaw": 27.84,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.1,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5487D549_7D4E_A987_41D4_835867686345",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 7.36,
 "popupMaxWidth": "95%",
 "yaw": -29.92,
 "showDuration": 500
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_92F572DC_8343_06FB_41CF_864C3CA67A6B_t.jpg",
 "label": "escenas-de-la-guerra",
 "scaleMode": "fit_inside",
 "width": 1496,
 "loop": false,
 "id": "video_92F572DC_8343_06FB_41CF_864C3CA67A6B",
 "height": 900,
 "video": {
  "width": 1106,
  "class": "VideoResource",
  "mp4Url": "media/video_92F572DC_8343_06FB_41CF_864C3CA67A6B.mp4",
  "height": 666
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 43.98,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 87.37,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -34.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 57.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 0.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.04
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 56.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.22
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -38.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.18
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 31.28,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 41.33,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.89
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_8101CB72_9E1F_E420_41E1_5E1F024E3426",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 179.62,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 0, 1)",
   "media": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 1, 2)",
   "media": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 2, 3)",
   "media": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 3, 4)",
   "media": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 4, 5)",
   "media": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 5, 6)",
   "media": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 6, 7)",
   "media": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 7, 8)",
   "media": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 8, 9)",
   "media": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 9, 10)",
   "media": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist, 10, 0)",
   "media": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_mobile_playlist"
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 11",
 "id": "panorama_7D747778_7323_05EE_41DC_97522F54C128",
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.5,
   "class": "AdjacentPanorama",
   "yaw": 179.43,
   "distance": 1,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0"
  },
  {
   "backwardYaw": -65.25,
   "class": "AdjacentPanorama",
   "yaw": -152.68,
   "distance": 1,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77"
  },
  {
   "backwardYaw": -127.51,
   "class": "AdjacentPanorama",
   "yaw": 149.15,
   "distance": 1,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": 180.96,
   "y": 910.3,
   "x": 785.03
  }
 ],
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
 "partial": false
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
 "left": "0%",
 "backgroundColorRatios": [
  0
 ],
 "right": "0%",
 "scrollEnabled": true,
 "paddingRight": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.5634029467365!2d-57.63561062921791!3d-25.282058030471635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7f2358d412f%3A0x4ad538d9d71078e!2sPante%C3%B3n%20Nacional%20de%20los%20H%C3%A9roes%20y%20Oratorio%20de%20la%20Virgen%20Nuestra%20Se%C3%B1ora%20Santa%20Mar%C3%ADa%20de%20la%20Asunci%C3%B3n!5e0!3m2!1ses-419!2spy!4v1578215909351!5m2!1ses-419!2spy",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "data": {
  "name": "WebFrame5113"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 8.37,
    "targetYaw": -1.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 15.81,
    "targetPitch": 22.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 76.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.75
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 131.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.44
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 177.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 40.26
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -119.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -77.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 23.43
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80543A3D_9E1F_E420_41B6_53C521B4BCAF",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 27.32,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6EE4211A_7948_A3E8_41D5_0FDB9A23EF72",
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_D530EA7A_FB82_341F_419B_CDE83A7C9D3F",
 "easing": "linear"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6EE0F67B_7948_AE29_419A_AA5A6A67666F",
 "easing": "linear"
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_93FBCC73_8584_55AE_41DA_0ED71E358F00",
 "width": "100.034%",
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "url": "https://pnh.visitapy.com/info/juanpablo.html",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "99.972%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.23,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 652,
    "height": 1024
   }
  ]
 },
 "pitch": 4.18,
 "popupMaxWidth": "95%",
 "yaw": -0.02,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_722FC780_7CC6_A885_41CF_68CD5DF7D42A",
 "width": "100.034%",
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "url": "https://pnh.visitapy.com/info/franciscosolano.html",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "99.972%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 5844,
   "height": 3896
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2730
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_6B81FAD8_7CC2_B886_4192_33E86037436A_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_5E2145EB_7CC1_A89A_41A5_60C47CFF5D83"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_93B2DD14_8584_776A_41A6_FB35C20161EA",
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_540A5BC4_7D46_988E_41C8_DB11B1FFAF26"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.png",
 "width": 60,
 "maxWidth": 60,
 "right": 20,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "top": 20,
 "transparencyActive": true,
 "minWidth": 50,
 "mode": "push",
 "height": 60,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 76.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.75
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 131.77,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 25.44
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 177.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 40.26
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -119.46,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -77.5,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 23.43
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.17
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7D747778_7323_05EE_41DC_97522F54C128_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -1.51,
  "pitch": 22.36
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_5408FBCA_7D46_989A_41DF_112EBEA8F847"
},
{
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
 "width": "100%",
 "scrollBarColor": "#987B55",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>Rholand Bucci</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\">Este proyecto es una demostraci\u00f3n del futuro del turismo internacional. Es un Paseo Digital en constante evoluci\u00f3n, por ende, todo contenido desplegado aqu\u00ed est\u00e1 bajo mejora constante.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.58vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:3.58vh;font-family:'Antonio';\"><B>CONTACTO:</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"mailto:rholand@rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>rholand@rbucci.com</U></SPAN></A></SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://rbucci.com\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>www.rbucci.com</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.56vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.24vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:2.24vh;font-family:'Open Sans Semibold';\"> </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://api.whatsapp.com/send?phone=595981408400&amp;text=Hola, me gustÃ³ el Paseo Digital del PanteÃ³n!\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#0000ff;font-size:2.24vh;font-family:'Open Sans Semibold';\"><U>+595 981 408 400</U></SPAN></A></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.24vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.35,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 653,
    "height": 1024
   }
  ]
 },
 "pitch": 9.92,
 "popupMaxWidth": "95%",
 "yaw": -179.99,
 "showDuration": 500
},
{
 "class": "Map",
 "maximumZoomFactor": 1.2,
 "label": "Planta Baja",
 "id": "map_69020EB9_7449_435E_41CF_D5F57863A927",
 "fieldOfViewOverlayInsideColor": "#FF0000",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927.jpeg",
    "class": "ImageResourceLevel",
    "width": 1876,
    "height": 1609
   },
   {
    "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 276,
    "height": 237
   }
  ]
 },
 "width": 1876,
 "thumbnailUrl": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
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
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 1609,
 "fieldOfViewOverlayInsideOpacity": 0.4
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 110,
 "label": "Punto 5",
 "id": "panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.14,
   "class": "AdjacentPanorama",
   "yaw": -5.71,
   "distance": 1,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0"
  },
  {
   "backwardYaw": 42.12,
   "class": "AdjacentPanorama",
   "yaw": -84.79,
   "distance": 1,
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_t.jpg"
  }
 ],
 "hfovMin": "140%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": -83.31,
   "y": 576.09,
   "x": 1375.65
  }
 ],
 "overlays": [
  "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_tcap0",
  "this.overlay_63D8D63D_7321_0766_41D0_2B5D8231C748",
  "this.overlay_5CC40283_7449_C332_41C9_8069D9B730D1",
  "this.overlay_531A8EED_7448_C0F6_41CD_5D706BD85A25",
  "this.overlay_5DDB34F2_74B7_C0D2_41CE_37C25FF8F198",
  "this.overlay_9FC3C222_85BC_EDAE_41DD_790BBB06A27F",
  "this.overlay_9F45F2B1_85BC_32AD_41DC_8CE93C7E4BFF"
 ],
 "partial": false
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.65,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_45418F33_7F42_9989_41D5_287A481E4D1C",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45418F33_7F42_9989_41D5_287A481E4D1C_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 39.45,
 "popupMaxWidth": "95%",
 "yaw": -76.08,
 "showDuration": 500
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_921B3444_8584_55EA_41D5_BC5AE0C58944",
 "easing": "linear"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_BA4F67A9_9E1F_EC21_41D3_56FF75167A51, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_BA4F67A9_9E1F_EC21_41D3_56FF75167A51, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_927B716B_834D_03DD_4197_7D0AC69E6FAB",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_BA4F67A9_9E1F_EC21_41D3_56FF75167A51"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.42,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 7.72,
 "popupMaxWidth": "95%",
 "yaw": 29.62,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "children": [
  "this.Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
 "layout": "absolute",
 "width": "85%",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "horizontalAlign": "center",
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 7",
 "id": "panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.78,
   "class": "AdjacentPanorama",
   "yaw": -27.46,
   "distance": 1,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0"
  },
  {
   "backwardYaw": -180,
   "class": "AdjacentPanorama",
   "yaw": -0.38,
   "distance": 1,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77"
  },
  {
   "backwardYaw": 109.57,
   "class": "AdjacentPanorama",
   "yaw": 29.54,
   "distance": 1,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": 181.25,
   "y": 205.65,
   "x": 796.16
  }
 ],
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
 "partial": false
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 88.01,
    "targetYaw": -69.81,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 175.84,
    "targetPitch": 36.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.67
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -59.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.58
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.36
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.3,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 38.5
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 16.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.09
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 49.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 5.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 11.93,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 48.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -35.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 1.32
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BEE5ADE9_9E1F_FC20_41C0_7CECE0F424F2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 143.57,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 2000
  },
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_4EEC705B_7D43_A7BB_41B2_AA05D122AFD1"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_90797384_859C_336A_41D7_FDEE4ABD0EFD",
 "easing": "linear"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_723E77D5_7CC6_A88F_41C6_039A8FC74C78",
  "this.Container_73FFBCC0_7CC6_9886_41CE_B623B6A569CA"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_72DFDA82_7CC6_B885_41B9_702B6A474553",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--FS L\u00f3pez"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 6000,
   "height": 4000
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2730
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_5E2595DB_7CC1_A8BA_41BE_540427022E22"
},
{
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
 "width": "50%",
 "scrollBarColor": "#987B55",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Open Sans Semibold';\">Por presi\u00f3n de la jerarqu\u00eda eclesi\u00e1stica y ciudadanos devotos de la Virgen, que es considerada hasta ahora Patrona del Paraguay y Mariscala de sus Ej\u00e9rcitos, el Dr. F\u00e9lix Paiva se ve obligado a restituir el Oratorio a la Virgen de la Asunci\u00f3n en 1937 y al mismo tiempo continu\u00f3 siendo Pante\u00f3n Nacional de los H\u00e9roes. Por el Decreto N\u00b0 895/1993 del Arzobispado de Asunci\u00f3n, se nombr\u00f3 a Monse\u00f1or An\u00edbal Rachid Rector del Oratorio Nuestra Se\u00f1ora de la Asunci\u00f3n y por ende del Pante\u00f3n Nacional.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 73.87,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 147.42,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -22.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -31.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 22.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.74
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.24,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 12.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -31.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.86
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 30.27,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 9.11
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 15.39
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_81F16C5A_9E1F_FC63_41D3_8CF62363DFF2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -179.5,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_57126416_7DCF_AF8A_41AA_AB184A6512A2_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_422929BF_7DCE_B8FA_41C9_3D604782A849"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.2,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 654,
    "height": 1024
   }
  ]
 },
 "pitch": 7.17,
 "popupMaxWidth": "95%",
 "yaw": 69.83,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
  "this.Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 37,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 73.34,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -34.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 57.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 0.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.04
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 56.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.22
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -38.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.18
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 31.28,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 41.33,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.89
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_8001795A_9E1F_E463_41DB_77A527E99165",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -150.46,
  "pitch": 0
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_90555454_859C_55EA_41DA_E582E8A515FD",
 "easing": "linear"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 5250
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2340,
   "height": 4096
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1170,
   "height": 2048
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 585,
   "height": 1024
  },
  {
   "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 292,
   "height": 512
  }
 ],
 "id": "ImageResource_5403ABB3_7D46_988A_41B7_B5688CCF9672"
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, true, 0, null, null, false)",
 "class": "Button",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "shadowBlurRadius": 15,
 "width": 98,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "label": "CONTACTO",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button contact"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 5844,
   "height": 3896
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 4096,
   "height": 2730
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_5E21E5EB_7CC1_A89A_41D7_4415EB2FC698"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 27.95,
    "targetYaw": -5.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 55.15,
    "targetPitch": 6.28
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -46.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 51.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 53.57
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 50.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 115.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 74.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -166.94,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -0.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 54.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -63.94,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 30.46
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -6.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.08
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BF210E58_9E1F_FC6F_41C8_837834C5B274",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 95.21,
  "pitch": 0
 }
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23.ogg"
 },
 "id": "audio_56B2CC17_7D43_7F8B_41CA_CCB9837C1C23",
 "data": {
  "label": "Piano Inspiration (Full Complete)"
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1226,
   "height": 1920
  },
  {
   "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 653,
   "height": 1024
  },
  {
   "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_3D1CDA51_7F46_9B86_41CC_7C5B78F4109D"
},
{
 "borderRadius": 0,
 "children": [
  "this.Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
 "layout": "absolute",
 "width": "50%",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "horizontalAlign": "center",
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 10,
 "data": {
  "name": "-left"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "15%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "vertical",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "7%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "visible",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 7.2,
    "targetYaw": -9.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 13.46,
    "targetPitch": -12.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.67,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.17,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 41.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -8.92,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 58.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 77.75,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.14
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 145.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.16,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.35
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -120.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -121.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -53.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.13
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80CB3AEE_9E1F_E423_41E1_83CBE2CB3202",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -8.03,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_49CDD077_7479_3FD2_41CD_86311297C5F8",
 "width": "100.034%",
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "url": "https://pnh.visitapy.com/info/josefelix.html",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "99.972%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "toolTipShadowSpread": 0,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "id": "MapViewer",
 "width": "100%",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadow": true,
 "minHeight": 1,
 "playbackBarProgressBorderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#000000",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "minWidth": 1,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "playbackBarProgressOpacity": 1,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowBlurRadius": 3,
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "propagateClick": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipPaddingTop": 4,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontSize": "16px",
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarRight": 0,
 "borderRadius": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "toolTipOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipFontColor": "#606060",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingRight": 6,
 "paddingBottom": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowColor": "#333333",
 "progressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipTextShadowBlurRadius": 3,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "Floor Plan"
 },
 "toolTipShadowOpacity": 1,
 "progressOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "toolTipShadowSpread": 0,
 "toolTipShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadow": true,
 "minHeight": 50,
 "playbackBarProgressBorderSize": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingLeft": 6,
 "vrPointerSelectionTime": 2000,
 "progressBorderColor": "#000000",
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipFontStyle": "normal",
 "playbackBarProgressOpacity": 1,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowBlurRadius": 3,
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "propagateClick": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontWeight": "normal",
 "toolTipFontFamily": "Arial",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipPaddingTop": 4,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontSize": "16px",
 "progressRight": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarRight": 0,
 "borderRadius": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "paddingRight": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBorderSize": 0,
 "playbackBarLeft": 0,
 "toolTipOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipTextShadowOpacity": 0,
 "top": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipFontColor": "#606060",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingRight": 6,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "vrPointerSelectionColor": "#FF6600",
 "paddingBottom": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowColor": "#333333",
 "progressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipShadowOpacity": 1,
 "progressOpacity": 1,
 "paddingTop": 0,
 "playbackBarHeight": 10,
 "transitionMode": "blending"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 37.5,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 74.35,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -34.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 57.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 0.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.04
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 56.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.22
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -38.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.18
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 31.28,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 41.33,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.89
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_80E53AC0_9E1F_E45F_41D4_910912677655",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 152.54,
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 8",
 "id": "panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0,
   "class": "AdjacentPanorama",
   "yaw": 0.5,
   "distance": 1,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0"
  },
  {
   "backwardYaw": 49.3,
   "class": "AdjacentPanorama",
   "yaw": -42.33,
   "distance": 1,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0"
  },
  {
   "backwardYaw": -0.38,
   "class": "AdjacentPanorama",
   "yaw": -180,
   "distance": 1,
   "panorama": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB"
  },
  {
   "backwardYaw": 129.35,
   "class": "AdjacentPanorama",
   "yaw": 53.26,
   "distance": 1,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": 181.41,
   "y": 366.64,
   "x": 795.07
  }
 ],
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
 "partial": false
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 6",
 "id": "panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
 "adjacentPanoramas": [
  {
   "backwardYaw": -152.68,
   "class": "AdjacentPanorama",
   "yaw": -65.25,
   "distance": 1,
   "panorama": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128"
  },
  {
   "backwardYaw": -42.33,
   "class": "AdjacentPanorama",
   "yaw": 49.3,
   "distance": 1,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77"
  },
  {
   "backwardYaw": -5.71,
   "class": "AdjacentPanorama",
   "yaw": 178.14,
   "distance": 1,
   "panorama": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A"
  },
  {
   "backwardYaw": 44.34,
   "class": "AdjacentPanorama",
   "yaw": -48.93,
   "distance": 1,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0"
  },
  {
   "backwardYaw": -27.46,
   "class": "AdjacentPanorama",
   "yaw": 62.78,
   "distance": 1,
   "panorama": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB"
  },
  {
   "backwardYaw": 171.97,
   "class": "AdjacentPanorama",
   "yaw": -0.42,
   "distance": 1,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": -87.53,
   "y": 550.3,
   "x": 973.3
  }
 ],
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
 "partial": false
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
  "this.Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
  "this.HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
  "this.Button_0DECFFED_12FA_D26D_419B_F907711405D7"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
 "layout": "vertical",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 300,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.34,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 73.67,
 "popupMaxWidth": "95%",
 "yaw": 169.94,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.57,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_566B7F84_7D46_988E_41BE_73EF3146CE56",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 42.89,
 "popupMaxWidth": "95%",
 "yaw": 76.48,
 "showDuration": 500
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3628,
   "height": 5697
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2608,
   "height": 4096
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1304,
   "height": 2048
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 652,
   "height": 1024
  },
  {
   "url": "media/popup_483359CE_75BB_4132_41C8_2385EBA46B9F_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_483349CE_75BB_4132_41CC_BB9AF1EF6966"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_93D6985C_834F_01F4_41DB_6D3F1D40F66C_t.jpg",
 "label": "cuadro-guerra-triple-alianza",
 "scaleMode": "fit_inside",
 "width": 1422,
 "loop": false,
 "id": "video_93D6985C_834F_01F4_41DB_6D3F1D40F66C",
 "height": 884,
 "video": {
  "width": 1088,
  "class": "VideoResource",
  "mp4Url": "media/video_93D6985C_834F_01F4_41DB_6D3F1D40F66C.mp4",
  "height": 678
 }
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 1",
 "id": "panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.77,
   "class": "AdjacentPanorama",
   "yaw": -121.61,
   "distance": 1,
   "panorama": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534"
  },
  {
   "backwardYaw": 149.8,
   "class": "AdjacentPanorama",
   "yaw": -127.94,
   "distance": 1,
   "panorama": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A"
  },
  {
   "backwardYaw": -149.4,
   "class": "AdjacentPanorama",
   "yaw": -36.43,
   "distance": 1,
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA"
  }
 ],
 "vfov": 180,
 "pitch": 0,
 "thumbnailUrl": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_t.jpg"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": 34.67,
   "y": 1422.87,
   "x": 1445.97
  }
 ],
 "overlays": [
  "this.overlay_6A4DDD67_7458_C1F2_41BB_A0CB77E638B2",
  "this.overlay_549307EB_745F_C0F1_41BA_4FB9E1DF1ECA",
  "this.overlay_6BEEA622_7458_C372_41CD_C4C9B10E8C86",
  "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0",
  "this.overlay_4EC05072_74CB_7FD2_41CC_D4B965AD3E43",
  "this.overlay_C07B9E88_CF73_A0BC_41BA_ACCDDE193D0D",
  "this.overlay_8DAAE9CC_9E0E_E467_41E3_2DCF213E144B",
  "this.overlay_7924616C_774B_6228_41CB_04FC9FDA8187",
  "this.overlay_8C375A73_9E11_E420_41E1_4FB49659339B",
  "this.overlay_65C9D518_7748_E3E8_41C1_DDE6B84C93B0"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -34.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 57.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 0.88,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 47.04
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 56.59
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.11,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 45.79
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.22
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 21.42
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -38.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 24.18
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 31.28,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -5.72
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 41.33,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.89
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_9001469B_8584_729E_41CB_42FF86EB5F25",
 "width": "100.034%",
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "url": "https://pnh.visitapy.com/info/roquegonzalez.html",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "99.972%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_54074BBC_7D46_98FE_41CC_59034A81230E"
},
{
 "borderRadius": 0,
 "textShadowColor": "#000000",
 "class": "Label",
 "id": "Label_3B5B3C77_7457_47D2_41B5_B06EEEEF5C4D",
 "width": 315,
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "text": "de los Hérores",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "minWidth": 1,
 "fontSize": "22px",
 "height": 31,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 0,
 "textShadowBlurRadius": 10,
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "propagateClick": true,
 "textShadowOpacity": 1,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "paddingTop": 0,
 "textDecoration": "none",
 "fontWeight": "bold",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 2000
  },
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_4E98204C_7D43_A79D_41C3_9CEF2C8B5331"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
 "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.png",
 "width": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": true,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
 "height": 60,
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_73A17FEF_7CC2_989A_41DA_18DD2E7B4E87",
 "width": "100.034%",
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "url": "https://pnh.visitapy.com/info/carlosantonio.html",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "99.972%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "class": "WebFrame",
 "id": "WebFrame_978D59E4_859C_FEAA_41AA_D4AA8EC88AC3",
 "width": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "url": "https://pnh.visitapy.com/info/josegaspar.html",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "paddingTop": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.67,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.17,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 41.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -8.92,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 58.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 77.75,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.14
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 145.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.16,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.35
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -120.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -121.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -53.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.13
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -9.55,
  "pitch": -12.06
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 54.16,
 "popupMaxWidth": "95%",
 "yaw": -170.13,
 "showDuration": 500
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_92172D15_858B_F76A_41D2_74125918E909",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -22.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -31.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 22.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.74
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.24,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 12.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -31.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.86
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 30.27,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 9.11
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 15.39
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_93840CAA_8584_56BE_41D0_201723BE99F9",
  "this.Container_926F4D60_8584_77AA_41C6_92D935D1898E"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_904F4090_8587_ED6A_41DB_8F0D83FA0228",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--Juan Pablo II"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_9DB4192F_859C_5FB6_41DB_B26439333009",
 "easing": "linear"
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_927B716B_834D_03DD_4197_7D0AC69E6FAB_t.jpg",
 "label": "jose-felix-estigarribia",
 "scaleMode": "fit_inside",
 "width": 902,
 "loop": false,
 "id": "video_927B716B_834D_03DD_4197_7D0AC69E6FAB",
 "height": 1080,
 "video": {
  "width": 784,
  "class": "VideoResource",
  "mp4Url": "media/video_927B716B_834D_03DD_4197_7D0AC69E6FAB.mp4",
  "height": 940
 }
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_64BEC982_7CC6_988A_41BA_EC318ACECEE7",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 108,
    "targetYaw": -1.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 216,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_8192CC3A_9E1F_FC20_41D7_684AF5A1304A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 131.07,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "maxHeight": 37,
 "class": "IconButton",
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "width": 49,
 "maxWidth": 49,
 "right": 30,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "bottom": 8,
 "height": 37,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 52.45,
    "targetYaw": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 104.38,
    "targetPitch": 0
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -22.74,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -31.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 22.99,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -32.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 0.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.74
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 178.24,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 12.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -31.78,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.07
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -28.51,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.86
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -0.13,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.1
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 30.27,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 9.11
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 15.39
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_801A3979_9E1F_E420_41D7_DF87A97B7334",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -126.74,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 22.85,
    "targetYaw": -9.55,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 44.9,
    "targetPitch": -12.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.67,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.41
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -9.17,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 41.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -8.92,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 58.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 36.05,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 77.75,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 16.14
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 4.84
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 145.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.16,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 8.35
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -120.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -121.21,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 6.34
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -53.89,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.13
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_81179B9A_9E1F_E4E0_41D8_49D8B0485360",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -50.65,
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 28.52,
 "popupMaxWidth": "95%",
 "yaw": 4.12,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_49CDD077_7479_3FD2_41CD_86311297C5F8"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_49CDB077_7479_3FD2_41D0_44DA14F8F2C8",
 "left": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "2%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "2%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.62,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 17.58,
 "popupMaxWidth": "95%",
 "yaw": -101.04,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_49CDB077_7479_3FD2_41D0_44DA14F8F2C8",
  "this.Container_49CDF077_7479_3FD2_4190_98C2D896BD4C"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_49CD1078_7479_3FDE_4199_990D6D60F6FA",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--JF Estigarribia"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 108,
    "targetYaw": 97.22,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 216,
    "targetPitch": 9.55
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 113.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 115.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -2.2
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BE3EAC9C_9E1F_FCE7_41DD_B3B31D47E7AB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -47.17,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.Image_6643B8C0_7458_CF2F_41D6_027A16ABEDA9",
  "this.Container_667BA06F_745B_5FF1_41D8_E0F77A6A58E8"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_14F80305_1BED_F1EE_4193_B39F49D6928C",
 "left": 5,
 "width": 488,
 "scrollBarColor": "#000000",
 "gap": 5,
 "horizontalAlign": "center",
 "layout": "horizontal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "top": 5,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 116,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 3.35,
    "targetYaw": -1.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 5.72,
    "targetPitch": 2.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BF003E90_9E1F_FCE0_41D0_2CDD225CAD96",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -1.86,
  "pitch": 0
 }
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, true, 0, null, null, false)",
 "class": "Button",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "shadowBlurRadius": 15,
 "width": 98,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "label": "UBICACI\u00d3N",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button location"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "right": "0%",
 "horizontalAlign": "left",
 "gap": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
 "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.png",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": true,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.png",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 5250
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2340,
   "height": 4096
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1170,
   "height": 2048
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 585,
   "height": 1024
  },
  {
   "url": "media/popup_55530E52_7D41_7B85_41D3_D21BAEE45E56_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 292,
   "height": 512
  }
 ],
 "id": "ImageResource_54085BC7_7D46_9889_41CD_33EED883FBC8"
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_93FBCC73_8584_55AE_41DA_0ED71E358F00"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_93840CAA_8584_56BE_41D0_201723BE99F9",
 "left": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "2%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "2%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.04,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_553D087A_7D4E_B87A_419E_89BC379AF377",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_553D087A_7D4E_B87A_419E_89BC379AF377_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 15.44,
 "popupMaxWidth": "95%",
 "yaw": -104.92,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "maxHeight": 897,
 "class": "Image",
 "id": "Image_3AA4B22B_75D8_C372_41DA_40A3EDD17B37",
 "left": "0%",
 "width": "100%",
 "maxWidth": 1337,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_3FD4A7B8_75D8_C15E_41C7_20F7251FAC21.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "scaleMode": "fit_to_height",
 "data": {
  "name": "Image71348"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.28,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 6.29,
 "popupMaxWidth": "95%",
 "yaw": 30.02,
 "showDuration": 500
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_90157D98_8203_4A20_41CC_67A9FA2D574A_t.jpg",
 "label": "rakiura teaser mute",
 "scaleMode": "fit_inside",
 "width": 1920,
 "loop": false,
 "id": "video_90157D98_8203_4A20_41CC_67A9FA2D574A",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_90157D98_8203_4A20_41CC_67A9FA2D574A.mp4",
  "height": 1080
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_5402CBB3_7D46_988A_41D1_F4BE91359572"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 5250
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2340,
   "height": 4096
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1170,
   "height": 2048
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 585,
   "height": 1024
  },
  {
   "url": "media/popup_5487D549_7D4E_A987_41D4_835867686345_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 292,
   "height": 512
  }
 ],
 "id": "ImageResource_54073BBA_7D46_98FA_41CA_DE333FA3B8F3"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
  "this.Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
  "this.Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
 "layout": "vertical",
 "width": "50%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "horizontalAlign": "left",
 "paddingLeft": 50,
 "paddingRight": 50,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "backgroundOpacity": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -46.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 51.06
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 32.03,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 53.57
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 72.48,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 50.31
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 115.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 74.68
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -166.94,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -0.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -106.64,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 54.33
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -63.94,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 30.46
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -6.41,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.08
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -5.78,
  "pitch": 6.28
 }
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
  "this.HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
 "layout": "horizontal",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 20,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "always",
 "height": "75%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "backgroundOpacity": 0.3
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 2000
  },
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_4E8EA046_7D43_A78D_41D6_6779A0D71D89"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -1.63,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -2.39,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.48
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 28.26,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 11.62
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 68.96,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.85
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 100.36,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 19.66
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 141.06,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 36.24
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -161.91,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 34.23
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -129.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 49.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -102.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 18.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -73.23,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 7.6
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": -30.02,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.61
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -1.26,
  "pitch": 2.51
 }
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_38BF7F5E_1C3A_D01A_41B5_74C8E50916F2",
 "layout": "absolute",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "height": "44%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container header contact"
 },
 "backgroundOpacity": 0.3
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.WebFrame_978D59E4_859C_FEAA_41AA_D4AA8EC88AC3"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_97908A47_859C_FDF6_41D8_D72B0E328DEA",
 "left": "2%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "2%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "2%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "2%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
  "this.Container_0BD17D93_1236_F6B5_4193_247950F46092"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
 "layout": "absolute",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0,
 "scrollBarVisible": "rollOver",
 "height": "30%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container header"
 },
 "backgroundOpacity": 0.3
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.87,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_68258B13_7CCE_998B_41DB_6F592F0455BB",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_68258B13_7CCE_998B_41DB_6F592F0455BB_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -29.1,
 "popupMaxWidth": "95%",
 "yaw": -20.81,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.19,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_55449B6D_7D43_799E_41BE_32FF20E0245A",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 17.67,
 "popupMaxWidth": "95%",
 "yaw": 98.53,
 "showDuration": 500
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 1788
  },
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1220
  },
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 610
  },
  {
   "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 305
  }
 ],
 "id": "ImageResource_4E99304C_7D43_A79D_41D5_5DD7FC0DF257"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22",
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "gap": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "height": 90,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "backgroundOpacity": 0.3
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 9",
 "id": "panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
 "adjacentPanoramas": [
  {
   "backwardYaw": -53.64,
   "class": "AdjacentPanorama",
   "yaw": -147.35,
   "distance": 1,
   "panorama": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0"
  },
  {
   "backwardYaw": 149.15,
   "class": "AdjacentPanorama",
   "yaw": -127.51,
   "distance": 1,
   "panorama": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128"
  },
  {
   "backwardYaw": -0.42,
   "class": "AdjacentPanorama",
   "yaw": 171.97,
   "distance": 1,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0"
  },
  {
   "backwardYaw": 29.54,
   "class": "AdjacentPanorama",
   "yaw": 109.57,
   "distance": 1,
   "panorama": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB"
  },
  {
   "backwardYaw": 53.26,
   "class": "AdjacentPanorama",
   "yaw": 129.35,
   "distance": 1,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": -80.12,
   "y": 533.88,
   "x": 574.21
  }
 ],
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
 "partial": false
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.85,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -30.22,
 "popupMaxWidth": "95%",
 "yaw": 23.47,
 "showDuration": 500
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6B1AB4C2_7CC1_688A_41C0_97C126E67E6D",
 "easing": "linear"
},
{
 "borderRadius": 0,
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "height": 58,
 "propagateClick": true,
 "verticalAlign": "middle",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 113.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 14.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 115.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": -2.2
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": 97.22,
  "pitch": 9.55
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_421F19E1_7DCE_B886_41DE_A5EDF1BA2977"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_55449B6D_7D43_799E_41BE_32FF20E0245A_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_541DEBAF_7D46_989A_41B1_FA5578882B38"
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_BA41D7AA_9E1F_EC23_41DD_773ED1FA4E68",
  "this.PanoramaPlayListItem_BA42F7AB_9E1F_EC21_41C1_4E449EA9123E",
  "this.PanoramaPlayListItem_BA43E7AB_9E1F_EC21_41C5_C1F735164C52",
  "this.PanoramaPlayListItem_BA4407AC_9E1F_EC27_41CC_DA434E8A359B",
  "this.PanoramaPlayListItem_BA4537AD_9E1F_EC21_41E0_7429EE5C7C84",
  "this.PanoramaPlayListItem_BA4667AD_9E1F_EC21_4154_B7A4A66C16AA",
  "this.PanoramaPlayListItem_BA58C7AE_9E1F_EC23_41A8_EF22F630FA90",
  "this.PanoramaPlayListItem_BA5907AF_9E1F_EC21_4170_C90AB477A694",
  "this.PanoramaPlayListItem_BA5A47B0_9E1F_EC3F_41DB_12BD043D7CF2",
  "this.PanoramaPlayListItem_BA5B67B0_9E1F_EC3F_41C7_0EBDF3E955BC",
  "this.PanoramaPlayListItem_BA5C67B1_9E1F_EC21_41CF_0AB6340B56B7"
 ],
 "id": "mainPlayList"
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 10",
 "id": "panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.43,
   "class": "AdjacentPanorama",
   "yaw": -179.5,
   "distance": 1,
   "panorama": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128"
  },
  {
   "backwardYaw": -48.93,
   "class": "AdjacentPanorama",
   "yaw": 44.34,
   "distance": 1,
   "panorama": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0"
  },
  {
   "backwardYaw": 0.5,
   "class": "AdjacentPanorama",
   "yaw": 0,
   "distance": 1,
   "panorama": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77"
  },
  {
   "backwardYaw": -147.35,
   "class": "AdjacentPanorama",
   "yaw": -53.64,
   "distance": 1,
   "panorama": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 741.43,
   "x": 785.98
  }
 ],
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
 "partial": false
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "propagateClick": true,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4711
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2608,
   "height": 4096
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1304,
   "height": 2048
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 652,
   "height": 1024
  },
  {
   "url": "media/popup_37B06473_75C8_C7D2_41D9_A6490CEFC935_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 326,
   "height": 512
  }
 ],
 "id": "ImageResource_37B07473_75C8_C7D2_41D7_57FF2264C800"
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_04FF2C2C_1216_7593_4195_88C3C7049763",
  "this.Container_04FF0C2C_1216_7593_419A_8AC354592A51"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
 "left": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "10%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 0.94,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 5.79,
 "popupMaxWidth": "95%",
 "yaw": -20.66,
 "showDuration": 500
},
{
 "class": "Video",
 "thumbnailUrl": "media/video_8D1816BF_835D_0EB5_41C0_020C81D2D133_t.jpg",
 "label": "Francisco-Solano-L",
 "scaleMode": "fit_inside",
 "width": 856,
 "loop": false,
 "id": "video_8D1816BF_835D_0EB5_41C0_020C81D2D133",
 "height": 1000,
 "video": {
  "width": 794,
  "class": "VideoResource",
  "mp4Url": "media/video_8D1816BF_835D_0EB5_41C0_020C81D2D133.mp4",
  "height": 928
 }
},
{
 "borderRadius": 0,
 "maxHeight": 2,
 "class": "Image",
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "maxWidth": 3000,
 "right": "0%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "bottom": 53,
 "height": 2,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.54,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 55.41,
 "popupMaxWidth": "95%",
 "yaw": 171.3,
 "showDuration": 500
},
{
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_49CD0078_7479_3FDE_41C6_833268668E41",
 "rollOverIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_rollover.jpg",
 "width": "25%",
 "maxWidth": 60,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, false, 0, null, null, false)",
 "height": "75%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "pressedIconURL": "skin/IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB_pressed.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_5407FBBB_7D46_98FA_41D2_6D1230ED05FF"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.61,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": -41.07,
 "popupMaxWidth": "95%",
 "yaw": 10.32,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.42,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_536BE102_7DC3_E98A_41C1_DC1F77107319",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_536BE102_7DC3_E98A_41C1_DC1F77107319_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 5.29,
 "popupMaxWidth": "95%",
 "yaw": 159.25,
 "showDuration": 500
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_907C1FAC_859C_D2BA_41DD_DB6512181B46",
 "easing": "linear"
},
{
 "class": "Panorama",
 "hfov": 360,
 "hfovMax": 100,
 "label": "Punto 2",
 "id": "panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
 "adjacentPanoramas": [
  {
   "backwardYaw": 132.83,
   "class": "AdjacentPanorama",
   "yaw": -11.93,
   "distance": 1,
   "panorama": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534"
  },
  {
   "backwardYaw": -121.03,
   "class": "AdjacentPanorama",
   "yaw": 120.87,
   "distance": 1,
   "panorama": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA"
  },
  {
   "backwardYaw": -127.94,
   "class": "AdjacentPanorama",
   "yaw": 149.8,
   "distance": 1,
   "panorama": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6"
  }
 ],
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_t.jpg",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_t.jpg"
  }
 ],
 "hfovMin": "120%",
 "mapLocations": [
  {
   "map": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "class": "PanoramaMapLocation",
   "angle": -62.58,
   "y": 1433.87,
   "x": 803.49
  }
 ],
 "overlays": [
  "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_tcap0",
  "this.overlay_54998E8E_7459_4333_41AA_37BC2D265505",
  "this.overlay_50F3AE8E_7459_4332_41BB_5E042B2313C9",
  "this.overlay_5509354F_7457_4132_41CE_168B78672CE8",
  "this.overlay_470916D9_74CB_40DE_41DC_40CDA3F4A04C"
 ],
 "partial": false
},
{
 "borderRadius": 0,
 "maxHeight": 600,
 "class": "Image",
 "id": "Image_6643B8C0_7458_CF2F_41D6_027A16ABEDA9",
 "width": "12.91%",
 "maxWidth": 600,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_6643B8C0_7458_CF2F_41D6_027A16ABEDA9.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "height": "47.414%",
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5895"
 },
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 2000
  },
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1365
  },
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 682
  },
  {
   "url": "media/popup_566B7F84_7D46_988E_41BE_73EF3146CE56_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 341
  }
 ],
 "id": "ImageResource_4E889041_7D43_A787_41B3_DC4A3EE10855"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 5250
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2340,
   "height": 4096
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1170,
   "height": 2048
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 585,
   "height": 1024
  },
  {
   "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 292,
   "height": 512
  }
 ],
 "id": "ImageResource_540B4BC2_7D46_988A_41D4_0785272F4B3B"
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 1788
  },
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1220
  },
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 610
  },
  {
   "url": "media/popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 305
  }
 ],
 "id": "ImageResource_4E8F4045_7D43_A78F_41BF_008706213A36"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1"
 ],
 "class": "Container",
 "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
 "left": "10%",
 "scrollBarColor": "#000000",
 "right": "10%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_7350196B_7CC2_B99A_41C1_DC86DDA501BB"
 ],
 "class": "Container",
 "id": "Container_737EF99A_7CC2_B8BA_41B0_80F380D34B7C",
 "left": "2%",
 "scrollBarColor": "#000000",
 "right": "2%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "88%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 5250
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2340,
   "height": 4096
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1170,
   "height": 2048
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 585,
   "height": 1024
  },
  {
   "url": "media/popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 292,
   "height": 512
  }
 ],
 "id": "ImageResource_541D4BAD_7D46_989E_41DA_DB5F8207EDA2"
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, true, 0, null, null, false)",
 "class": "Button",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "shadowBlurRadius": 15,
 "width": 130,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "label": "INFORMACI\u00d3N",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "iconHeight": 0,
 "data": {
  "name": "Button house info"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000"
},
{
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "viewerArea": "this.MapViewer",
 "movementMode": "constrained"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_901FA424_8584_F5AA_41B5_A35FBCB02B22"
 ],
 "class": "Container",
 "id": "Container_902D1456_8584_F596_41B1_320B5BD80C0A",
 "left": "2%",
 "scrollBarColor": "#000000",
 "right": "2%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "2%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "88%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.68,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_572876B8_7D41_E885_41D2_B5C07F2528F0",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_572876B8_7D41_E885_41D2_B5C07F2528F0_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 35.4,
 "popupMaxWidth": "95%",
 "yaw": 6.67,
 "showDuration": 500
},
{
 "borderRadius": 0,
 "shadowBlurRadius": 25,
 "children": [
  "this.Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
  "this.Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
 "left": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowColor": "#000000",
 "right": "10%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "scrollBarColor": "#000000",
 "shadowOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "overflow": "scroll",
 "shadow": true,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "backgroundOpacity": 1
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_69020EB9_7449_435E_41CF_D5F57863A927",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_BA4F87A8_9E1F_EC2F_41C7_850A35765771"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.61,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_458480C0_7CC1_6886_41CB_73D8636B6DCC",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_458480C0_7CC1_6886_41CB_73D8636B6DCC_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 653,
    "height": 1024
   }
  ]
 },
 "pitch": 22.09,
 "popupMaxWidth": "95%",
 "yaw": 179.79,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.1,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 7.35,
 "popupMaxWidth": "95%",
 "yaw": -161.33,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.58,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_5133DA93_7D43_788A_4195_473DB2431260",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_5133DA93_7D43_788A_4195_473DB2431260_0_2.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 42.61,
 "popupMaxWidth": "95%",
 "yaw": -113.78,
 "showDuration": 500
},
{
 "paddingTop": 0,
 "borderRadius": 0,
 "children": [
  "this.Label_14FBC305_1BED_F1EE_41B3_DAC14B1EE44E",
  "this.Label_3B5B3C77_7457_47D2_41B5_B06EEEEF5C4D"
 ],
 "class": "Container",
 "id": "Container_667BA06F_745B_5FF1_41D8_E0F77A6A58E8",
 "width": "76.639%",
 "scrollBarColor": "#000000",
 "gap": 0,
 "horizontalAlign": "left",
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "verticalAlign": "middle",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "data": {
  "name": "Container6442"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "class": "Button",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "shadowBlurRadius": 15,
 "width": 69,
 "shadowColor": "#000000",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 5,
 "layout": "horizontal",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "label": "PLANOS",
 "fontStyle": "normal",
 "verticalAlign": "middle",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "iconHeight": 32,
 "data": {
  "name": "Button floorplan"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 0,
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundOpacity": 0,
 "pressedFontColor": "#000000"
},
{
 "borderRadius": 0,
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "gap": 10,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "paddingLeft": 30,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "height": 51,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "backgroundOpacity": 0
},
{
 "visible": false,
 "borderRadius": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "width": "91.304%",
 "scrollBarColor": "#000000",
 "right": "0%",
 "horizontalAlign": "center",
 "gap": 3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "85.959%",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_421529DC_7DCE_B8BE_41D3_B3BEFE60A942"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4"
 ],
 "class": "Container",
 "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
 "left": "10%",
 "scrollBarColor": "#000000",
 "right": "10%",
 "horizontalAlign": "right",
 "gap": 10,
 "layout": "vertical",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderSize": 0,
 "top": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "bottom": "84.67%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.png",
 "width": 60,
 "maxWidth": 60,
 "right": 20,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "top": 20,
 "transparencyActive": true,
 "minWidth": 50,
 "mode": "push",
 "height": 60,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.png",
 "data": {
  "name": "IconButton54739"
 },
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 1788
  },
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2048,
   "height": 1220
  },
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 610
  },
  {
   "url": "media/popup_5695574B_7D41_A99A_41D7_21C661FD19EE_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 305
  }
 ],
 "id": "ImageResource_4E89A040_7D43_A785_41D5_F3BA7DED3536"
},
{
 "paddingTop": 20,
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
 "width": "50%",
 "scrollBarColor": "#987B55",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText12940"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#987b55;font-size:2.8vh;font-family:'Antonio';\"><B>Historia</B></SPAN><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Open Sans Semibold';\">En octubre de 1863, el entonces presidente de la Rep\u00fablica Francisco Solano L\u00f3pez, orden\u00f3 la construcci\u00f3n del oratorio de la Virgen de la Asunci\u00f3n, fue dise\u00f1ada por el arquitecto italiano Alejandro Ravizza, en colaboraci\u00f3n con el constructor Gi\u00e1como Colombino. Pero, a consecuencia de la Guerra de la Triple Alianza, el edificio qued\u00f3 inconcluso y sobre andamios durante m\u00e1s de 70 a\u00f1os. Reci\u00e9n despu\u00e9s de la Guerra del Chaco en 1936 se pudo terminar y fue inaugurado el 12 de octubre del mismo a\u00f1o, para convertirlo por decreto presidencial en Pante\u00f3n Nacional de los H\u00e9roes.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh; white-space:pre-wrap;color:#000000;font-size:1.12vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "height": "12.832%",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--- MENU"
 },
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png",
 "backgroundOpacity": 0.6
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 2,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 47.3,
    "targetYaw": -2.01,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 94.03,
    "targetPitch": 1.51
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 15.45,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 10.87
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 20.73,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 33.98
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 55.9,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 32.47
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 70.47,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 52.82
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 102.62,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 43.27
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 101.87,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 13.88
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 114.68,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 20.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "pitchSpeed": 17.05,
    "targetYaw": 120.71,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "targetPitch": 3.33
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_BEC48E23_9E1F_FC21_41E3_23925E1C2EBA",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 75,
  "yaw": -59.13,
  "pitch": 0
 }
},
{
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4500
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 2730,
   "height": 4096
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 1365,
   "height": 2048
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 682,
   "height": 1024
  },
  {
   "url": "media/popup_54273946_7D4F_B98A_41DA_F36DBD50FE18_0_4.jpg",
   "class": "ImageResourceLevel",
   "width": 341,
   "height": 512
  }
 ],
 "id": "ImageResource_540ACBC3_7D46_988A_41C9_13CC83B4F284"
},
{
 "borderRadius": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "width": 110,
 "scrollBarColor": "#000000",
 "right": "0%",
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "middle",
 "overflow": "visible",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_095ED5F6_1BEA_B02B_41B1_5247CD8872B4",
  "this.Container_04FFDC2C_1216_7593_41A7_64E2588509FB"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
 "layout": "vertical",
 "width": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 300,
 "borderSize": 0,
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "backgroundOpacity": 0.3
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
  "this.Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E"
 ],
 "class": "Container",
 "scrollBarWidth": 10,
 "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
 "left": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "right": "0%",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "layout": "absolute",
 "paddingLeft": 0,
 "borderSize": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "data": {
  "name": "--INFO"
 },
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "borderRadius": 0,
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "data": {
  "name": "UIComponent15675"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "backgroundOpacity": 0.55
},
{
 "borderRadius": 0,
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorRatios": [],
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [],
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage15676"
 },
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "class": "CloseButton",
 "id": "closeButtonPopupPanorama",
 "shadowBlurRadius": 6,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "horizontalAlign": "center",
 "paddingRight": 5,
 "layout": "horizontal",
 "paddingLeft": 5,
 "borderSize": 0,
 "rollOverIconColor": "#666666",
 "minHeight": 0,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "top": 10,
 "iconLineWidth": 5,
 "minWidth": 0,
 "mode": "push",
 "pressedIconColor": "#888888",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingBottom": 5,
 "iconBeforeLabel": true,
 "gap": 5,
 "fontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "label": "",
 "fontStyle": "normal",
 "propagateClick": false,
 "verticalAlign": "middle",
 "iconColor": "#000000",
 "iconHeight": 20,
 "data": {
  "name": "CloseButton15677"
 },
 "shadow": false,
 "shadowSpread": 1,
 "paddingTop": 5,
 "iconWidth": 20,
 "textDecoration": "none",
 "visible": false,
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundOpacity": 0.3
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 31,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7E911130_7321_FD7E_41C8_3413131F93CA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 174.98,
 "bleachingDistance": 0.4,
 "pitch": 65.63,
 "bleaching": 0.7,
 "id": "overlay_63D96A48_7321_0F2E_41C0_1245E822A059"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -149.4,
   "hfov": 11.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.13,
   "image": "this.AnimatedImageResource_BA0F477E_9E1F_EC23_41C2_1FE9240CD1BF",
   "yaw": -149.4,
   "pitch": -14.32,
   "distance": 100
  }
 ],
 "id": "overlay_5C631E87_7448_C331_41D6_64719DB78C84",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6, this.camera_BEE5ADE9_9E1F_FC20_41C0_7CECE0F424F2); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02 Right"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.03,
   "hfov": 9.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.24
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.35,
   "image": "this.AnimatedImageResource_BA0F777E_9E1F_EC23_41CC_17794F56075D",
   "yaw": -121.03,
   "pitch": -10.24,
   "distance": 50
  }
 ],
 "id": "overlay_5312F7DF_744F_C0D2_41CC_6C870B4BBC6C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A, this.camera_BEC48E23_9E1F_FC21_41E3_23925E1C2EBA); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.12,
   "hfov": 13.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.87,
   "image": "this.AnimatedImageResource_BA00C77F_9E1F_EC21_41C8_056BBC20119E",
   "yaw": 42.12,
   "pitch": -9.91,
   "distance": 100
  }
 ],
 "id": "overlay_58341EA3_744F_4372_41C3_C201BEC31CDE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A, this.camera_BF210E58_9E1F_FC6F_41C8_837834C5B274); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.32,
   "hfov": 25.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 2.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 718,
      "height": 1130
     }
    ]
   },
   "pitch": 2.63,
   "yaw": 118.32
  }
 ],
 "id": "overlay_620C0D36_7758_A23B_41D4_FADAD1FDBE4A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.8,
   "hfov": 20.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": 2.81
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 572,
      "height": 982
     }
    ]
   },
   "pitch": 2.81,
   "yaw": 161.8
  }
 ],
 "id": "overlay_63901FC7_7748_DE58_41DD_083C1207EABE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.98,
   "hfov": 13.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 32
     }
    ]
   },
   "pitch": 4.75
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 366,
      "height": 739
     }
    ]
   },
   "pitch": 4.75,
   "yaw": 64.98
  }
 ],
 "id": "overlay_6221242E_7749_E228_41B5_8897D89554B5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.37,
   "hfov": 26.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 29
     }
    ]
   },
   "pitch": 1.83
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 740,
      "height": 1378
     }
    ]
   },
   "pitch": 1.83,
   "yaw": -98.37
  }
 ],
 "id": "overlay_6D1C24EE_78B8_E22B_4195_61F08AD2EE19",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "paddingTop": 10,
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "htmlText_653B74D3_7748_E278_41B9_7B961B2A4E9D",
 "width": "100%",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 0,
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText2884"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">En octubre de 1863, el entonces presidente de la Rep\u00fablica Francisco Solano L\u00f3pez, orden\u00f3 la construcci\u00f3n del oratorio de la Virgen de la Asunci\u00f3n, fue dise\u00f1ada por el arquitecto italiano Alejandro Ravizza, en colaboraci\u00f3n con el constructor Gi\u00e1como Colombino. Pero, a consecuencia de la Guerra de la Triple Alianza, el edificio qued\u00f3 inconcluso y sobre andamios durante m\u00e1s de 70 a\u00f1os. Reci\u00e9n despu\u00e9s de la Guerra del Chaco en 1936 se pudo terminar y fue inaugurado el 12 de octubre del mismo a\u00f1o, para convertirlo por decreto presidencial en Pante\u00f3n Nacional de los H\u00e9roes.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Por presi\u00f3n de la jerarqu\u00eda eclesi\u00e1stica y ciudadanos devotos de la Virgen, que es considerada hasta ahora Patrona del Paraguay y Mariscala de sus Ej\u00e9rcitos, el Dr. F\u00e9lix Paiva se ve obligado a restituir el Oratorio a la Virgen de la Asunci\u00f3n en 1937 y al mismo tiempo continu\u00f3 siendo Pante\u00f3n Nacional de los H\u00e9roes. Por el Decreto N\u00b0 895/1993 del Arzobispado de Asunci\u00f3n, se nombr\u00f3 a Monse\u00f1or An\u00edbal Rachid Rector del Oratorio Nuestra Se\u00f1ora de la Asunci\u00f3n y por ende del Pante\u00f3n Nacional.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B><U>Valor hist\u00f3rico y cultural</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">El Pante\u00f3n Nacional de los H\u00e9roes es la r\u00e9plica paraguaya de Le Panth\u00e9on, un monumento ubicado en el V distrito de Par\u00eds.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">El Pante\u00f3n Nacional es el mausoleo de la patria, donde reposan los restos mortales de los algunos h\u00e9roes de la historia Paraguaya como; Don Carlos Antonio L\u00f3pez (1.er presidente Constitucional), Mariscal Francisco Solano L\u00f3pez, Mariscal Jos\u00e9 F\u00e9lix Estigarribia (h\u00e9roe y vencedor en la guerra del Chaco contra Bolivia) y de su esposa. Adem\u00e1s, los Ni\u00f1os M\u00e1rtires de Acosta \u00d1u, dos Soldados Desconocidos, entre otros.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Dentro del recinto del pante\u00f3n se han fijado infinidad de placas honor\u00edficas enviadas por ilustres gobernantes extranjeros, reyes y pr\u00edncipes. Felicitaciones y versos de reconocimiento a la Armada Paraguaya, las Fuerzas A\u00e9reas entre otras instituciones. Muchos se preguntan que significado tiene la inscripci\u00f3n en lengua latina que se halla en la parte frontal del pante\u00f3n; \u201cFides et Patria\u201d significa, \u201cFe y Patria\u201d.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">En el a\u00f1o 2009, el Pante\u00f3n Nacional de los H\u00e9roes fue electo como uno de los Siete Tesoros del Patrimonio Cultural Material de Asunci\u00f3n, promovida por la Organizaci\u00f3n Capital Americana de la Cultura debido a la capital\u00eda de Asunci\u00f3n como Capital Americana de la Cultura 2009.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B><U>M\u00e9ritos para el ingreso</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Sobre los m\u00e9ritos que deben reunir una persona para ser inhumada en el Pante\u00f3n Nacional hay disparidad de criterios. Para muchos historiadores, debe haber contribuido con una causa \u00fatil a la humanidad, haber hecho una obra muy importante que le haya tra\u00eddo beneficios al pa\u00eds y al mundo en general. Hay quienes afirman que en el Pante\u00f3n est\u00e1n enterradas personas que no tienen suficientes m\u00e9ritos para descansar junto a los ilustres de la patria. No obstante, hay quienes consideran que todos los personajes que se encuentran all\u00ed, cada uno en su momento, se han destacado, se han ganado el m\u00e9rito de ingresar a este recinto.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B><U>D\u00eda de los H\u00e9roes</U></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\">Cada 1 de marzo se conmemora el D\u00eda de los H\u00e9roes, en honor al Mariscal Francisco Solano L\u00f3pez, que hab\u00eda sido asesinado en la Guerra contra la Triple Alianza, acaecida en esa fecha en 1870. La ceremonia de recordaci\u00f3n generalmente es presidida por el Presidente de la Rep\u00fablica, representantes de las Fuerzas Armadas y del Congreso Nacional, ministros y otras autoridades. Se declara este d\u00eda como feriado y no hay actividad laboral en las instituciones p\u00fablicas.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "paddingTop": 10,
 "borderRadius": 0,
 "class": "HTMLText",
 "id": "htmlText_79C4A72F_7748_AE29_41D5_D8131A239EC2",
 "width": "100%",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 0,
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText2884"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18.04px;\">Ubicado en el centro de Am\u00e9rica del Sur, el Paraguay es actualmente un pa\u00eds mediterr\u00e1neo, de 406.752 Km2. y un poco m\u00e1s de 5.000.000 de habitantes; distante 1448 Kms. del Oc\u00e9ano Atl\u00e1ntico. Al norte limita con Bolivia, al sureste y sur oeste con Argentina y al este y norte con Brasil.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10.04px;\"><BR STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-size:11.02px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18.04px;\">Habitado desde tiempos remotos por numerosas parcialidades ind\u00edgenas, en el a\u00f1o 1524, toma otro rumbo su historia milenaria con la llegada a sus tierras, del primer europeo; el espa\u00f1ol Alejo Garc\u00eda, quien ingres\u00f3 desde el Atl\u00e1ntico, por la isla de Santa Catarina, Brasil. Tres a\u00f1os m\u00e1s tarde lleg\u00f3 por agua, Sebasti\u00e1n Gaboto, y en 1537 el Capit\u00e1n Juan de Salazar de Espinoza fund\u00f3 la Casa Fuerte de la Asunci\u00f3n. A partir de entonces se convirti\u00f3 en el centro de la conquista espa\u00f1ola, siendo sede de operaciones para expediciones hacia las sierras del Plata. En los antiguos mapas figuraba con el nombre de \u00abParaguay, Provincia Gigante de las Indias\u00bb, debido a su gran extensi\u00f3n. En el a\u00f1o 1542 el Rey de Espa\u00f1a nombr\u00f3 a Alvar N\u00fa\u00f1ez Cabeza de Vaca, Gobernador del Paraguay; los habitantes descontentos con su gesti\u00f3n lo destituyen en 1544. En su lugar designaron a Domingo Mart\u00ednez de Irala, adquiriendo los pobladores, con autorizaci\u00f3n del Rey, el derecho a nominar su propio gobernador, atribuci\u00f3n retenida hasta 1735.</SPAN></SPAN></DIV></div>",
 "backgroundOpacity": 0
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 125,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 171.46,
 "bleachingDistance": 0.4,
 "pitch": 86.73,
 "bleaching": 0.7,
 "id": "overlay_63012C92_7321_0B22_41B4_8548FFA07AC7"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.83,
   "hfov": 6.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.51,
   "image": "this.AnimatedImageResource_BA7617A1_9E1F_EC20_41AA_F0A332DE4FC3",
   "yaw": 132.83,
   "pitch": -5.01,
   "distance": 100
  }
 ],
 "id": "overlay_5CE08A41_7449_C331_41D9_E06B6BABA738",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A, this.camera_807739FB_9E1F_E421_41A3_CE372D37E526); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.77,
   "hfov": 4.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.29,
   "image": "this.AnimatedImageResource_BA7657A1_9E1F_EC20_41D1_0E4139482433",
   "yaw": 126.77,
   "pitch": -2.67,
   "distance": 100
  }
 ],
 "id": "overlay_530347E1_7448_C0EE_41D6_D62CD5FDA849",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6, this.camera_80466A1C_9E1F_E7E7_41C2_3F31CF5DA18E); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.82,
   "hfov": 4.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.83,
   "image": "this.AnimatedImageResource_BA77A7A1_9E1F_EC20_41E3_BEF65ACC21AD",
   "yaw": 116.82,
   "pitch": -0.96,
   "distance": 50
  }
 ],
 "id": "overlay_5EEA6E2F_7448_C372_41B8_F90221DD1398",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": -180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7D747778_7323_05EE_41DC_97522F54C128_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 155.88,
 "bleachingDistance": 0.4,
 "pitch": 30.96,
 "bleaching": 0.7,
 "id": "overlay_631F3DEE_732F_04E2_41BE_037B67803BBA"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -162.67,
 "bleachingDistance": 0.4,
 "pitch": 29.96,
 "bleaching": 0.7,
 "id": "overlay_63FE59DA_732F_0D22_41CB_248E9040C4CE"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.1,
   "hfov": 41.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 20.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 41.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 1218,
      "height": 1920
     }
    ]
   },
   "pitch": 20.09,
   "yaw": -1.1
  }
 ],
 "id": "overlay_50948EE4_7DC2_F88D_41D4_D1E26DA44092",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.15,
   "hfov": 8.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.47
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.85,
   "image": "this.AnimatedImageResource_BA7FB79C_9E1F_ECE0_41D4_F63222DF2B10",
   "yaw": 149.15,
   "pitch": -5.47,
   "distance": 100
  }
 ],
 "id": "overlay_45C3E042_74DB_3F32_41C2_20BE9BDE513F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_807C09DA_9E1F_E463_41C6_58E8FC149FC0); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.43,
   "hfov": 14.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.33,
   "image": "this.AnimatedImageResource_BA7F179D_9E1F_ECE0_41C6_9E97629E16ED",
   "yaw": 179.43,
   "pitch": -17.94,
   "distance": 100
  }
 ],
 "id": "overlay_464DA314_74DB_C153_41B6_55AB5BB07F82",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_80152998_9E1F_E4E0_41D5_BAA52D875FD7); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.68,
   "hfov": 11.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.72,
   "image": "this.AnimatedImageResource_BA7F679D_9E1F_ECE0_41C6_CDCAC4489496",
   "yaw": -152.68,
   "pitch": -9.69,
   "distance": 100
  }
 ],
 "id": "overlay_4247EA74_74D8_C3D6_41CB_961CE8AF2AF7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_806F39B9_9E1F_E420_4190_3B303E150C80); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.98,
   "hfov": 9.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.46,
   "image": "this.AnimatedImageResource_BA70979D_9E1F_ECE0_41D6_41CFB233139B",
   "yaw": -179.98,
   "pitch": -4.73,
   "distance": 100
  }
 ],
 "id": "overlay_4020C417_74D9_C752_41CB_062EFA0ADDD3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 161.41,
 "bleachingDistance": 0.4,
 "pitch": 53.07,
 "bleaching": 0.7,
 "id": "overlay_4CDA38E0_74C9_C0EE_418D_1EB5EA1A6EAA"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.33,
   "hfov": 4.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 37.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.15,
   "image": "this.AnimatedImageResource_BA70079D_9E1F_ECE0_41CE_DA833EA86753",
   "yaw": 5.33,
   "pitch": 37.42,
   "distance": 100
  }
 ],
 "id": "overlay_434AB1FF_74C9_40D2_41C8_4B5517AACEEB",
 "data": {
  "label": "JFEstigarribia info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_49C55C9B_7449_4752_41D5_778AD11FD3A0, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JFEstigarribia foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.45,
   "hfov": 3.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 26.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 119,
      "height": 127
     }
    ]
   },
   "pitch": 26.6,
   "yaw": -1.45
  }
 ],
 "id": "overlay_48AEABEB_74C8_C0F2_41DB_9B916C612E20",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4CB8474C_74F9_4136_41D9_AA33E1B0D711, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_36DA5444_7449_4736_41C6_9EE93A6F222A, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.34,
   "hfov": 2.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 78,
      "height": 78
     }
    ]
   },
   "pitch": 27.63,
   "yaw": -175.34
  }
 ],
 "id": "overlay_6F5945E4_7CC2_A88D_41C1_776976A62B3C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5784300A_7D7E_A79A_41D6_86A0A3F3971E, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4EF1705D_7D43_A7BF_41B6_B292ACADAED5, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "JGR de Francia Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.72,
   "hfov": 9.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 3.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 271,
      "height": 436
     }
    ]
   },
   "pitch": 3.4,
   "yaw": -160.72
  }
 ],
 "id": "overlay_60E4F02D_7CC1_679E_41D5_3F9C5BE15E90",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JGR de Francia Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.29,
   "hfov": 2.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.11
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 5.11,
   "yaw": -160.29
  }
 ],
 "id": "overlay_5EC116BB_7CCE_E8FA_41AC_75FAD72565F0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_550D4797_7D42_A88A_41B4_91E4E9A86D12, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_540EEBCD_7D46_989E_41B8_F8DE7501ABE6, null, null, null, null, false)"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.51,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6F4545B5_7CC2_A88E_4171_91ABFD1ECCEE",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F4545B5_7CC2_A88E_4171_91ABFD1ECCEE_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 27.63,
 "popupMaxWidth": "95%",
 "yaw": -175.34,
 "showDuration": 500
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.77,
   "hfov": 1.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 74.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 184,
      "height": 152
     }
    ]
   },
   "pitch": 74.15,
   "yaw": 13.77
  }
 ],
 "id": "overlay_57E2D380_7D7E_A886_41DA_AB9242EAC4D7",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_54FE5D1A_7D41_7985_41DE_1F12EB9AF20D, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4EF1D05F_7D43_A7BB_41A2_33C857274DFB, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.25,
   "hfov": 1.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 5.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.94,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 59
     }
    ]
   },
   "pitch": 5.29,
   "yaw": 159.25
  }
 ],
 "id": "overlay_50614AC6_7DC3_988A_41CA_E1A3A78A2C6D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_536BE102_7DC3_E98A_41C1_DC1F77107319, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_421F19E1_7DCE_B886_41DE_A5EDF1BA2977, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.39,
   "hfov": 10.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": 5.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 305,
      "height": 462
     }
    ]
   },
   "pitch": 5.32,
   "yaw": 159.39
  }
 ],
 "id": "overlay_503C52DF_7DC3_A8BA_41BA_B1A6CBBF048A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.51,
   "hfov": 6.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 2.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 194,
      "height": 310
     }
    ]
   },
   "pitch": 2.85,
   "yaw": 179.51
  }
 ],
 "id": "overlay_4C0E868D_7DC2_E89E_41C0_81732FF0C625",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "VideoPanoramaOverlay",
 "hfov": 22.75,
 "videoVisibleOnStop": false,
 "video": {
  "width": 784,
  "class": "VideoResource",
  "mp4Url": "media/video_927B716B_834D_03DD_4197_7D0AC69E6FAB.mp4",
  "height": 940
 },
 "id": "overlay_9232E91B_834D_037D_41A8_A27C4FC69534",
 "enabledInCardboard": true,
 "vfov": 26.38,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_9232E91B_834D_037D_41A8_A27C4FC69534_t.jpg",
    "class": "ImageResourceLevel",
    "width": 902,
    "height": 1080
   }
  ]
 },
 "useHandCursor": false,
 "roll": 6.64,
 "rotationX": -12.49,
 "blending": 0,
 "rotationY": -30.76,
 "yaw": -33.66,
 "pitch": 11.18,
 "autoplay": true,
 "distance": 50,
 "data": {
  "label": "JF FRAME"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.22,
   "hfov": 3.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 50.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.08,
   "image": "this.AnimatedImageResource_BA72779F_9E1F_ECE0_41E1_F58C22A34311",
   "yaw": -1.22,
   "pitch": 50.18,
   "distance": 100
  }
 ],
 "id": "overlay_965853EF_835F_06D5_41CF_3BA958061FD3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.overlay_9232E91B_834D_037D_41A8_A27C4FC69534.set('enabled', !this.overlay_9232E91B_834D_037D_41A8_A27C4FC69534.get('enabled')); this.overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54.set('enabled', !this.overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54.get('enabled'))"
  }
 ]
},
{
 "class": "VideoPanoramaOverlay",
 "hfov": 32.57,
 "videoVisibleOnStop": false,
 "video": {
  "width": 1106,
  "class": "VideoResource",
  "mp4Url": "media/video_92F572DC_8343_06FB_41CF_864C3CA67A6B.mp4",
  "height": 666
 },
 "id": "overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54",
 "enabledInCardboard": true,
 "vfov": 21.13,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_90AC4CF7_8345_02B4_41DD_7E5B4FEF7A54_t.jpg",
    "class": "ImageResourceLevel",
    "width": 1496,
    "height": 900
   }
  ]
 },
 "useHandCursor": false,
 "roll": -9.19,
 "rotationX": -15.15,
 "blending": 0,
 "rotationY": 29.25,
 "yaw": 32.42,
 "pitch": 12.81,
 "autoplay": true,
 "distance": 50,
 "data": {
  "label": "Video"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.22,
   "hfov": 2.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.22
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.06,
   "image": "this.AnimatedImageResource_BA73E79F_9E1F_ECE0_41DF_6917DE709959",
   "yaw": -159.22,
   "pitch": 10.22,
   "distance": 100
  }
 ],
 "id": "overlay_962E40C0_858C_2EEA_4198_3B6B45914624",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 1360.85,
  "x": 1358.95,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 1360.85,
  "x": 1358.95,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6C2F47BC_7449_C156_41CA_FB850D37B14B",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 1371.84,
  "x": 716.46,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 1371.84,
  "x": 716.46,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6818ECC7_7449_C732_41DA_316C6BADAEEB",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 1229.17,
  "x": 14.8,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 1229.17,
  "x": 14.8,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6F0D0C09_7449_473E_41C8_C58148676689",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 672.07,
  "x": 1293.38,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 672.07,
  "x": 1293.38,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_69B15D3C_7449_4156_41CA_FCB342656F87",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 514.07,
  "x": 1288.63,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 514.07,
  "x": 1288.63,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_687569EB_7448_C0F2_41A6_7C54D36E20F4",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 488.28,
  "x": 886.28,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 488.28,
  "x": 886.28,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6FBD89A7_7448_C172_41AA_8CF19DA2E18E",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_6_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 304.61,
  "x": 708.05,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 304.61,
  "x": 708.05,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_6.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_68427A5A_7448_C3D3_41CF_1F64681A901A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_7_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 143.62,
  "x": 709.13,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 143.62,
  "x": 709.13,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_7.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6C286CBC_744F_4756_4192_203C0CAD1302",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_8_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 471.85,
  "x": 487.19,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 471.85,
  "x": 487.19,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_8.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6C248B70_744F_41EE_41B6_02687357F8C0",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_9_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 679.41,
  "x": 698.95,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 679.41,
  "x": 698.95,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_9.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_68340D9B_744F_4152_41BC_4EC837EC4A5B",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "map": {
  "width": 174.05,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_10_map.gif",
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 16
    }
   ]
  },
  "y": 848.27,
  "x": 698,
  "offsetY": 0,
  "height": 124.05,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false,
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 848.27,
  "x": 698,
  "width": 174.05,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_69020EB9_7449_435E_41CF_D5F57863A927_HS_10.png",
     "class": "ImageResourceLevel",
     "width": 174,
     "height": 124
    }
   ]
  },
  "height": 124.05
 },
 "useHandCursor": true,
 "id": "overlay_6FD28344_744F_C136_41D3_249E0BD1A676",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -139.05,
 "bleachingDistance": 0.4,
 "pitch": 66.64,
 "bleaching": 0.7,
 "id": "overlay_63D8D63D_7321_0766_41D0_2B5D8231C748"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.79,
   "hfov": 14.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -17.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.84,
   "image": "this.AnimatedImageResource_BA021780_9E1F_ECDF_41BD_CAF4F2CF2952",
   "yaw": -84.79,
   "pitch": -17.73,
   "distance": 100
  }
 ],
 "id": "overlay_5CC40283_7449_C332_41C9_8069D9B730D1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA, this.camera_BF6D4EC6_9E1F_FC63_41DF_5020B1E5CCC3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.89,
   "hfov": 7.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.74
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.43,
   "image": "this.AnimatedImageResource_BA025780_9E1F_ECDF_41E0_3EAD49ED2AC5",
   "yaw": -96.89,
   "pitch": -9.74,
   "distance": 100
  }
 ],
 "id": "overlay_531A8EED_7448_C0F6_41CD_5D706BD85A25",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Acceso al Patio"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Acceso al Interior"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.71,
   "hfov": 10.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.23,
   "image": "this.AnimatedImageResource_BA039780_9E1F_ECDF_41CA_31C944494E78",
   "yaw": -5.71,
   "pitch": -6.29,
   "distance": 100
  }
 ],
 "id": "overlay_5DDB34F2_74B7_C0D2_41CE_37C25FF8F198",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_BF003E90_9E1F_FCE0_41D0_2CDD225CAD96); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.26,
   "hfov": 26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 6.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 726,
      "height": 851
     }
    ]
   },
   "pitch": 6.37,
   "yaw": 119.26
  }
 ],
 "id": "overlay_9FC3C222_85BC_EDAE_41DD_790BBB06A27F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Himno Nacional del Paraguay"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.98,
   "hfov": 5.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 16
     }
    ]
   },
   "pitch": 25.94
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 161,
      "height": 162
     }
    ]
   },
   "pitch": 25.94,
   "yaw": 119.98
  }
 ],
 "id": "overlay_9F45F2B1_85BC_32AD_41DC_8CE93C7E4BFF",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_9E47667F_85BB_D596_41C8_B97EEA2EBB7E, undefined, true)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": -180,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -41.58,
 "bleachingDistance": 0.4,
 "pitch": 10.11,
 "bleaching": 0.7,
 "id": "overlay_6319A273_7321_1FE1_41B1_1ADCF754116C"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -5.65,
 "bleachingDistance": 0.4,
 "pitch": 24.18,
 "bleaching": 0.7,
 "id": "overlay_63FDF024_732F_1B67_41C6_5A047CF3C1BD"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.46,
   "hfov": 8.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 4.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 241,
      "height": 389
     }
    ]
   },
   "pitch": 4.41,
   "yaw": -0.46
  }
 ],
 "id": "overlay_47287BD9_7CC7_9886_41B9_601864129C3D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.38,
   "hfov": 13.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -21.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "image": "this.AnimatedImageResource_BA1F8787_9E1F_ECE1_41D4_0A11EB8FCD40",
   "yaw": -0.38,
   "pitch": -21.17,
   "distance": 100
  }
 ],
 "id": "overlay_5B32F65A_74B9_43D2_41D2_D4340B33B438",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_BEA70D53_9E1F_FC60_41D1_D91B953FD9FB); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.54,
   "hfov": 10.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_BA1FC787_9E1F_ECE1_41D8_4D5FC0A4C2DA",
   "yaw": 29.54,
   "pitch": -1.39,
   "distance": 100
  }
 ],
 "id": "overlay_5B89082B_74BB_4F72_41CC_92CC173FBCA5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_BE87BDA7_9E1F_FC20_41A6_55DDA8390B06); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.46,
   "hfov": 10.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.08
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.63,
   "image": "this.AnimatedImageResource_BA1F1788_9E1F_ECEF_41B5_0F91D353AC1A",
   "yaw": -27.46,
   "pitch": -10.08,
   "distance": 100
  }
 ],
 "id": "overlay_597410AF_74BB_3F72_41C5_851D6596A7C0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_BE470D19_9E1F_FDE1_41CF_3EC9752D53ED); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -19.47,
 "bleachingDistance": 0.4,
 "pitch": 29.96,
 "bleaching": 0.7,
 "id": "overlay_49D5A305_74C9_4136_41D0_B7BC001524D8"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 23.24,
 "bleachingDistance": 0.4,
 "pitch": 32.22,
 "bleaching": 0.7,
 "id": "overlay_41A20A23_74C9_4371_41C5_D4170493786B"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.55,
   "hfov": 1.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.18,
   "image": "this.AnimatedImageResource_BA109788_9E1F_ECEF_418C_FB5066B6E9F2",
   "yaw": 0.55,
   "pitch": 7.1,
   "distance": 100
  }
 ],
 "id": "overlay_6EABBD58_78DF_E268_41DB_E85D06D89FFD",
 "data": {
  "label": "JF Estigarribia Info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_6EB60D2A_78DF_E22B_41DA_59F22F850E4B, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JF Estigarribia Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.63,
   "hfov": 1.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": 3.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 31,
      "height": 43
     }
    ]
   },
   "pitch": 3.85,
   "yaw": -0.63
  }
 ],
 "id": "overlay_6EA53D58_78DF_E268_41DB_895C90750F09",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6EBEED2B_78DF_E228_419E_876D9449DEE3, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_6EBEFD2B_78DF_E228_41D9_86556289A261, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.12,
   "hfov": 1.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 28.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 28.52,
   "yaw": 4.12
  }
 ],
 "id": "overlay_6F4C55A7_7CC3_A88A_41DD_5F999B18A768",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_57AB389B_7D47_B8BA_41AC_9B7F409B230A, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4E8F4045_7D43_A78F_41BF_008706213A36, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Ventanal FS Lopez"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.94,
   "hfov": 1.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 73.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 111
     }
    ]
   },
   "pitch": 73.67,
   "yaw": 169.94
  }
 ],
 "id": "overlay_699549F9_7CDF_B887_419D_0112A1FD30DB",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_54D4BEFC_7D46_987D_41DD_BE4799AC4665, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4E8EA046_7D43_A78D_41D6_6779A0D71D89, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "CA Lopez Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.59,
   "hfov": 10.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 5.46
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.48,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 292,
      "height": 463
     }
    ]
   },
   "pitch": 5.46,
   "yaw": -20.59
  }
 ],
 "id": "overlay_6B4F5BB5_7CC1_B88E_41CC_42FEEA464B98",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.25,
   "hfov": 2.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.24,
   "image": "this.AnimatedImageResource_BA1F1789_9E1F_ECE1_41E2_DE22E8B668A9",
   "yaw": -19.25,
   "pitch": 10.35,
   "distance": 100
  }
 ],
 "id": "overlay_6B5EBFE4_7CC6_988E_41D3_070DCEB1543F",
 "data": {
  "label": "CA Lopez info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6B5BAFD5_7CC6_988F_41D8_4DCF040E46DD, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "CA Lopez foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.66,
   "hfov": 1.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 5.79
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 46
     }
    ]
   },
   "pitch": 5.79,
   "yaw": -20.66
  }
 ],
 "id": "overlay_6B7155D5_7CC2_A88E_41D5_BF0E0010F0F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5A5F0E34_7D41_7B8E_41DB_5863CA1F230D, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5403ABB3_7D46_988A_41B7_B5688CCF9672, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Beato Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.29,
   "hfov": 8.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": 4.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 242,
      "height": 416
     }
    ]
   },
   "pitch": 4.49,
   "yaw": 19.29
  }
 ],
 "id": "overlay_65501360_7CC1_6986_41C0_686F805FD606",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Beato Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.79,
   "hfov": 1.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 5.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 46,
      "height": 43
     }
    ]
   },
   "pitch": 5.69,
   "yaw": 19.79
  }
 ],
 "id": "overlay_65452B74_7CC2_998D_4174_EDE15BA2F6A2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5AFA2A44_7D42_BB8E_41D6_4F478F94162F, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5402CBB3_7D46_988A_41D1_F4BE91359572, null, null, null, null, false)"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6FB84588_7CC3_A886_41DA_D0B1AD27053F",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6FB84588_7CC3_A886_41DA_D0B1AD27053F_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 28.52,
 "popupMaxWidth": "95%",
 "yaw": 4.12,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.34,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_698139CA_7CDF_B885_41A7_43F744AE1AF3",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_698139CA_7CDF_B885_41A7_43F744AE1AF3_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 73.67,
 "popupMaxWidth": "95%",
 "yaw": 169.94,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.77,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6B7F65B6_7CC2_A88A_41DE_1AB30138FA42",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B7F65B6_7CC2_A88A_41DE_1AB30138FA42_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 5.79,
 "popupMaxWidth": "95%",
 "yaw": -20.66,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.66,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_657B9B45_7CC2_998F_418A_FFB9E7844C96",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_657B9B45_7CC2_998F_418A_FFB9E7844C96_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 5.69,
 "popupMaxWidth": "95%",
 "yaw": 19.79,
 "showDuration": 500
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.55,
   "hfov": 34.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 19.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 34.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 1008,
      "height": 1613
     }
    ]
   },
   "pitch": 19.67,
   "yaw": 179.55
  }
 ],
 "id": "overlay_54AC7638_7DDE_EB85_41C2_FA956E2EB3D6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.79,
   "hfov": 4.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 22.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 125,
      "height": 122
     }
    ]
   },
   "pitch": 22.09,
   "yaw": 179.79
  }
 ],
 "id": "overlay_452C5461_7CC6_AF86_41D1_CF19116B30BA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_458480C0_7CC1_6886_41CB_73D8636B6DCC, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_3D1CDA51_7F46_9B86_41CC_7C5B78F4109D, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.1,
   "hfov": 3.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.46,
   "image": "this.AnimatedImageResource_BA11478A_9E1F_ECE3_417B_7CBBB4AC2D94",
   "yaw": -174.1,
   "pitch": 37,
   "distance": 100
  }
 ],
 "id": "overlay_451E122B_7CC2_AB9A_41B9_039657264BF1",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "VideoPanoramaOverlay",
 "hfov": 21.45,
 "videoVisibleOnStop": false,
 "video": {
  "width": 794,
  "class": "VideoResource",
  "mp4Url": "media/video_8D1816BF_835D_0EB5_41C0_020C81D2D133.mp4",
  "height": 928
 },
 "id": "overlay_8CE20EC7_835D_1ED5_41DF_8221B426909F",
 "enabledInCardboard": true,
 "vfov": 26.44,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_8CE20EC7_835D_1ED5_41DF_8221B426909F_t.jpg",
    "class": "ImageResourceLevel",
    "width": 856,
    "height": 1000
   }
  ]
 },
 "useHandCursor": false,
 "roll": 8.18,
 "rotationX": -16.15,
 "blending": 0,
 "rotationY": -30.18,
 "yaw": 147.82,
 "pitch": 14.87,
 "autoplay": true,
 "distance": 50,
 "data": {
  "label": "Video"
 }
},
{
 "class": "VideoPanoramaOverlay",
 "hfov": 28.17,
 "videoVisibleOnStop": false,
 "video": {
  "width": 1088,
  "class": "VideoResource",
  "mp4Url": "media/video_93D6985C_834F_01F4_41DB_6D3F1D40F66C.mp4",
  "height": 678
 },
 "id": "overlay_92487A46_834D_01D7_41A5_BF98C79EA584",
 "enabledInCardboard": true,
 "vfov": 22.4,
 "loop": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_92487A46_834D_01D7_41A5_BF98C79EA584_t.jpg",
    "class": "ImageResourceLevel",
    "width": 1422,
    "height": 884
   }
  ]
 },
 "useHandCursor": false,
 "roll": -11.09,
 "rotationX": -18.94,
 "blending": 0,
 "rotationY": 31.43,
 "yaw": -147.66,
 "pitch": 15.24,
 "autoplay": true,
 "distance": 50,
 "data": {
  "label": "Video"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.91,
   "hfov": 2.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_17_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.2,
   "image": "this.AnimatedImageResource_BA12578A_9E1F_ECE3_41C6_D50E6D3BD227",
   "yaw": 20.91,
   "pitch": 11.25,
   "distance": 100
  }
 ],
 "id": "overlay_9051F465_859C_55AA_41AE_7CC0E9809E20",
 "data": {
  "label": "Info Beato"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_90555454_859C_55EA_41DA_E582E8A515FD, 'showEffect', false)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -56.15,
 "bleachingDistance": 0.4,
 "pitch": 12.12,
 "bleaching": 0.7,
 "id": "overlay_63F7E689_732F_072E_41CA_1E7979FE244F"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -5.65,
 "bleachingDistance": 0.4,
 "pitch": 28.7,
 "bleaching": 0.7,
 "id": "overlay_63CCF6B3_732F_0762_41C2_B3FF56566B76"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -99.61,
 "bleachingDistance": 0.4,
 "pitch": 60.86,
 "bleaching": 0.7,
 "id": "overlay_630CC9AF_732F_0D62_41B6_24F2F7718ADB"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.13,
   "hfov": 10.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": 3.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_21_0.png",
      "class": "ImageResourceLevel",
      "width": 288,
      "height": 445
     }
    ]
   },
   "pitch": 3.95,
   "yaw": -0.13
  }
 ],
 "id": "overlay_4DC75064_7DCE_A78E_41BB_305E2AF9A88D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "hfov": 14.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.14,
   "image": "this.AnimatedImageResource_BA15C78C_9E1F_ECE7_41B2_DAE0224AC8FD",
   "yaw": -180,
   "pitch": -20.29,
   "distance": 100
  }
 ],
 "id": "overlay_445072E6_74B9_C0F2_41C8_68564CCCE502",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB, this.camera_8101CB72_9E1F_E420_41E1_5E1F024E3426); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.33,
   "hfov": 18.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.92,
   "image": "this.AnimatedImageResource_BA15078C_9E1F_ECE7_41D2_B0A4F8C7DB92",
   "yaw": -42.33,
   "pitch": -15.14,
   "distance": 100
  }
 ],
 "id": "overlay_5B17B366_74B7_41F2_41B3_1671E7945EFE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_8139EB39_9E1F_E421_41D6_580A05C24A44); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.26,
   "hfov": 17.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.01
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.79,
   "image": "this.AnimatedImageResource_BA15478C_9E1F_ECE7_41E2_FEE3A5A3E5F2",
   "yaw": 53.26,
   "pitch": -14.01,
   "distance": 100
  }
 ],
 "id": "overlay_59A64057_74B7_3FD2_41BF_8B308D428440",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_81179B9A_9E1F_E4E0_41D8_49D8B0485360); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.5,
   "hfov": 11.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -12.12
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.54,
   "image": "this.AnimatedImageResource_BA16B78C_9E1F_ECE7_41E3_883BE98B1895",
   "yaw": 0.5,
   "pitch": -12.12,
   "distance": 100
  }
 ],
 "id": "overlay_5B4C739C_74C8_C156_4171_0FD6AAA48048",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_80D3EB16_9E1F_E5E3_41A2_27591066392B); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 36.8,
 "bleachingDistance": 0.4,
 "pitch": 41.51,
 "bleaching": 0.7,
 "id": "overlay_4D20CEBC_74C9_C357_41C0_FD89B2559390"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -28.26,
 "bleachingDistance": 0.4,
 "pitch": 40.01,
 "bleaching": 0.7,
 "id": "overlay_40B6CAE7_74C9_C0F2_4160_04D7A81E5356"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.73,
   "hfov": 2.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.7
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.25,
   "image": "this.AnimatedImageResource_BA16278D_9E1F_ECE1_41E1_8E9F697CF84F",
   "yaw": 1.73,
   "pitch": 8.7,
   "distance": 100
  }
 ],
 "id": "overlay_6EF486A9_7948_AE28_4186_6DAC24AAF0FF",
 "data": {
  "label": "JFEstigarribia info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_6EE0F67B_7948_AE29_419A_AA5A6A67666F, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JFEstigarribia foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.02,
   "hfov": 2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 53
     }
    ]
   },
   "pitch": 4.18,
   "yaw": -0.02
  }
 ],
 "id": "overlay_6EF496A9_7948_AE28_41D4_D711988EA7A8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6EF8767C_7948_AE2F_41D4_BE5024055CDC, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_6EF8867C_7948_AE2F_41D0_CA23B9123B0D, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.81,
   "hfov": 1.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -29.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": -29.1,
   "yaw": -20.81
  }
 ],
 "id": "overlay_6FD0C7EA_7CC1_A89A_41DE_7F8BDEA1F427",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_68258B13_7CCE_998B_41DB_6F592F0455BB, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5E2525DB_7CC1_A8BA_41B9_FEEB5D193E7A, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.47,
   "hfov": 1.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -30.22
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": -30.22,
   "yaw": 23.47
  }
 ],
 "id": "overlay_68BF327B_7CC1_687A_41DA_7AE8F6340536",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_68D56D13_7CCF_B98A_41D3_0FC8C8CB7A08, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5E2545DB_7CC1_A8BA_41D2_EDDFD86F9268, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.32,
   "hfov": 1.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -41.07
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": -41.07,
   "yaw": 10.32
  }
 ],
 "id": "overlay_6E36A5B5_7CCE_A88E_41D8_0FDF2C2B94B2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6F7BE03C_7CCF_E7FE_41D4_8232C0F9AFFC, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5E2595DB_7CC1_A8BA_41BE_540427022E22, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.67,
   "hfov": 2.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 35.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 91,
      "height": 96
     }
    ]
   },
   "pitch": 35.4,
   "yaw": 6.67
  }
 ],
 "id": "overlay_69BAEA46_7CC2_9B8D_41DF_30F32BAA43BA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_572876B8_7D41_E885_41D2_B5C07F2528F0, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4E99304C_7D43_A79D_41D5_5DD7FC0DF257, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Ventanal FS Lopez"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.3,
   "hfov": 2.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 55.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 124,
      "height": 111
     }
    ]
   },
   "pitch": 55.41,
   "yaw": 171.3
  }
 ],
 "id": "overlay_6991D8D6_7CDE_B88A_41CD_62FCCD110213",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_577ADBF9_7D41_9886_41D0_CAC3222D4A3B, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4E98204C_7D43_A79D_41C3_9CEF2C8B5331, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "CA Lopez foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.92,
   "hfov": 1.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.36
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 53
     }
    ]
   },
   "pitch": 7.36,
   "yaw": -29.92
  }
 ],
 "id": "overlay_6AC796DC_7CC2_E8BE_417E_8D22BE70ED0B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5487D549_7D4E_A987_41D4_835867686345, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_54073BBA_7D46_98FA_41CA_DE333FA3B8F3, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.5,
   "hfov": 2.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.21,
   "image": "this.AnimatedImageResource_BA68278E_9E1F_ECE3_41D4_702DD549E888",
   "yaw": -27.5,
   "pitch": 13.64,
   "distance": 100
  }
 ],
 "id": "overlay_692965B0_7CC1_6886_41CB_65B53A9D0EE2",
 "data": {
  "label": "CA Lopez info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_64BEC982_7CC6_988A_41BA_EC318ACECEE7, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "CA Lopez Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.65,
   "hfov": 13.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 6.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 386,
      "height": 608
     }
    ]
   },
   "pitch": 6.34,
   "yaw": -29.65
  }
 ],
 "id": "overlay_644367A4_7CC2_A88D_41DF_199D56634A7D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Beato Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.89,
   "hfov": 13.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 5.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 386,
      "height": 608
     }
    ]
   },
   "pitch": 5.37,
   "yaw": 29.89
  }
 ],
 "id": "overlay_648DF15C_7CCE_A9BE_41B4_9BD0C96997FA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Beato Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.02,
   "hfov": 1.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_16_0.png",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 53
     }
    ]
   },
   "pitch": 6.29,
   "yaw": 30.02
  }
 ],
 "id": "overlay_644C0C22_7CCE_9F8A_41C6_8E3EE903E2E8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5A63B2A6_7D41_E88B_41AB_6D12C363DDC5, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5407FBBB_7D46_98FA_41D2_6D1230ED05FF, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "JGR de Francia Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.99,
   "hfov": 25.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_17_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": 10.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 711,
      "height": 1230
     }
    ]
   },
   "pitch": 10.29,
   "yaw": -105.99
  }
 ],
 "id": "overlay_6758E755_7CC2_E98F_41DA_E77602DC5399",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JGR de Francia Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.92,
   "hfov": 3.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_18_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_18_0.png",
      "class": "ImageResourceLevel",
      "width": 92,
      "height": 88
     }
    ]
   },
   "pitch": 15.44,
   "yaw": -104.92
  }
 ],
 "id": "overlay_62ECB033_7CC1_678A_41D7_6B945A85FAEA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_553D087A_7D4E_B87A_419E_89BC379AF377, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_54074BBC_7D46_98FE_41CC_59034A81230E, null, null, null, null, false)"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.68,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_69A62A26_7CC2_9B8A_41D6_DACDAEC1CF16",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_69A62A26_7CC2_9B8A_41D6_DACDAEC1CF16_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 35.4,
 "popupMaxWidth": "95%",
 "yaw": 6.67,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.54,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_699D98A7_7CDE_B88A_4199_54AA28069533",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_699D98A7_7CDE_B88A_4199_54AA28069533_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 55.41,
 "popupMaxWidth": "95%",
 "yaw": 171.3,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.2,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6110E014_7CC1_678E_41D5_2510886C7E53",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6110E014_7CC1_678E_41D5_2510886C7E53_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 15.44,
 "popupMaxWidth": "95%",
 "yaw": -104.92,
 "showDuration": 500
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.22,
   "hfov": 3.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_19_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 87,
      "height": 92
     }
    ]
   },
   "pitch": 15.42,
   "yaw": 105.22
  }
 ],
 "id": "overlay_5728CFB5_7DC1_988E_41C8_368B04AC30EA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_563C1494_7DC2_A88D_41DD_BA8C2553B005, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4207C9CD_7DCE_B89E_41CF_CC1568025D16, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.51,
   "hfov": 24.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_20_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 11.57
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 690,
      "height": 1154
     }
    ]
   },
   "pitch": 11.57,
   "yaw": 105.51
  }
 ],
 "id": "overlay_566C43DB_7DCF_A8BA_41B3_13C7A26A1810",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.83,
   "hfov": 17.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_22_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 24
     }
    ]
   },
   "pitch": 8.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_22_0.png",
      "class": "ImageResourceLevel",
      "width": 488,
      "height": 745
     }
    ]
   },
   "pitch": 8.58,
   "yaw": 179.83
  }
 ],
 "id": "overlay_567B29B0_7DC1_B885_41D4_D7D82FF966F1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.49,
   "hfov": 2.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_23_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 17.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.49,
   "image": "this.AnimatedImageResource_BA6BD78E_9E1F_ECE0_41D7_0A6AA8006E57",
   "yaw": -177.49,
   "pitch": 17.44,
   "distance": 100
  }
 ],
 "id": "overlay_45511FF0_7CC2_9886_41D3_99C6F8AA80DB",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.99,
   "hfov": 2.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_24_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_24_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 9.92,
   "yaw": -179.99
  }
 ],
 "id": "overlay_47AE31A8_7CC1_E886_41C5_4C67A1767907",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_41B2EFC4_7CC1_988D_41D0_C328E1403EB5, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_3D296A5C_7F46_9BBE_41CB_DED7AC8E13AB, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.14,
   "hfov": 3.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_25_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 26.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.48,
   "image": "this.AnimatedImageResource_BA6B478F_9E1F_ECE0_41C0_437B872B483F",
   "yaw": -102.14,
   "pitch": 26.43,
   "distance": 100
  }
 ],
 "id": "overlay_97C04846_858C_FDF6_41B2_54737BCEEDB0",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.86,
   "hfov": 2.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_26_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.35,
   "image": "this.AnimatedImageResource_BA6C978F_9E1F_ECE0_41E3_37FF646ECEBD",
   "yaw": 31.86,
   "pitch": 14.29,
   "distance": 100
  }
 ],
 "id": "overlay_907B6FBD_859C_D29A_41C9_948C38E516EC",
 "data": {
  "label": "Info Beato"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_907C1FAC_859C_D2BA_41DD_DB6512181B46, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.83,
   "hfov": 3.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_27_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.28,
   "image": "this.AnimatedImageResource_BA6CE78F_9E1F_ECE0_41BC_3FF32067DA03",
   "yaw": 107.83,
   "pitch": 27.27,
   "distance": 100
  }
 ],
 "id": "overlay_921C23FE_8584_5296_41DD_5DEF4B254632",
 "data": {
  "label": "Info Juan Pablo II"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_921753EC_8584_52BA_41E0_5462D2E16D21, 'showEffect', false)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -75.24,
 "bleachingDistance": 0.4,
 "pitch": 36.99,
 "bleaching": 0.7,
 "id": "overlay_63D78E7A_7321_07E3_41D9_7D6C42976265"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.14,
   "hfov": 14.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.34,
   "image": "this.AnimatedImageResource_BA05F781_9E1F_ECE1_41E3_6C45AC0AB5DD",
   "yaw": 178.14,
   "pitch": -10.15,
   "distance": 100
  }
 ],
 "id": "overlay_59A71FAE_74B8_C172_41D3_4E2122E5A753",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A, this.camera_808B9A80_9E1F_E4E0_41BF_28BDE2FC851A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.3,
   "hfov": 15.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.8,
   "image": "this.AnimatedImageResource_BA054782_9E1F_ECE3_41DE_AFADCD6D018E",
   "yaw": 49.3,
   "pitch": -14.56,
   "distance": 100
  }
 ],
 "id": "overlay_5F818F2B_74B9_4172_41CF_531F0E90AD8A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_80A52A60_9E1F_E420_41D6_7CCBE2D2A4F8); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.78,
   "hfov": 10.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.81
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.23,
   "image": "this.AnimatedImageResource_BA069782_9E1F_ECE3_41CF_FB435F765787",
   "yaw": 62.78,
   "pitch": -9.81,
   "distance": 100
  }
 ],
 "id": "overlay_5D5171B2_74BB_C153_41D4_832669D3E542",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB, this.camera_80E53AC0_9E1F_E45F_41D4_910912677655); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.93,
   "hfov": 15.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.01
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.57,
   "image": "this.AnimatedImageResource_BA06C782_9E1F_ECE3_41DA_4F484370C8EE",
   "yaw": -48.93,
   "pitch": -13.01,
   "distance": 100
  }
 ],
 "id": "overlay_5E9CC8FE_74B9_C0D2_41D6_FC36A1E55B53",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_809E7AA1_9E1F_E421_41DC_D4FBD63129F7); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.25,
   "hfov": 11.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.28
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.14,
   "image": "this.AnimatedImageResource_BA062782_9E1F_ECE3_41C0_7DF590523E04",
   "yaw": -65.25,
   "pitch": -10.28,
   "distance": 100
  }
 ],
 "id": "overlay_59DDDB74_74B8_C1D6_41AD_FCA250C5A3B5",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D747778_7323_05EE_41DC_97522F54C128, this.camera_80543A3D_9E1F_E420_41B6_53C521B4BCAF); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.12,
   "hfov": 11.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_22_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 5.99
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_22_0.png",
      "class": "ImageResourceLevel",
      "width": 313,
      "height": 502
     }
    ]
   },
   "pitch": 5.99,
   "yaw": -72.12
  }
 ],
 "id": "overlay_562C3CF5_7DC7_988E_41BB_A5351190883C",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.42,
   "hfov": 16.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.06
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.1,
   "image": "this.AnimatedImageResource_BA078783_9E1F_ECE1_41C1_7D00819557FA",
   "yaw": -0.42,
   "pitch": -7.06,
   "distance": 100
  }
 ],
 "id": "overlay_5EA13A47_74BF_C332_41D9_16C3D1D36F48",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_80CB3AEE_9E1F_E423_41E1_83CBE2CB3202); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.61,
   "hfov": 1.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.5
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.79,
   "image": "this.AnimatedImageResource_BA07E783_9E1F_ECE1_41CB_99C0292F04E1",
   "yaw": -70.61,
   "pitch": 11.5,
   "distance": 100
  }
 ],
 "id": "overlay_37C404F3_75C8_C0D2_41CB_5F49807F6F16",
 "data": {
  "label": "JF Estigarribia Info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_37B91467_75C8_C7F2_41D3_21C3C32CBCD2, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JF Estigarribia Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.67,
   "hfov": 1.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 22
     }
    ]
   },
   "pitch": 6.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 68
     }
    ]
   },
   "pitch": 6.84,
   "yaw": -72.67
  }
 ],
 "id": "overlay_37C5E4F3_75C8_C0D2_41D4_3B58EBC42A69",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_37B06473_75C8_C7D2_41D9_A6490CEFC935, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_37B07473_75C8_C7D2_41D7_57FF2264C800, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Ventanal JF Estigarribia"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66.16,
   "hfov": 1.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 41.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 41.48,
   "yaw": -66.16
  }
 ],
 "id": "overlay_6FA0E914_7CC2_998E_41C1_C70B327E4308",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5695574B_7D41_A99A_41D7_21C661FD19EE, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4E89A040_7D43_A785_41D5_F3BA7DED3536, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Ventanal FS Lopez"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.48,
   "hfov": 1.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 42.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 42.89,
   "yaw": 76.48
  }
 ],
 "id": "overlay_69E04017_7CC1_E78B_41D0_383F479DFCFE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_566B7F84_7D46_988E_41BE_73EF3146CE56, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4E889041_7D43_A787_41B3_DC4A3EE10855, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "CA Lopez Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.62,
   "hfov": 28.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": 14.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.77,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 825,
      "height": 1215
     }
    ]
   },
   "pitch": 14.52,
   "yaw": -100.62
  }
 ],
 "id": "overlay_6B49294E_7CC1_999A_41B0_2964F4E961BC",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.46,
   "hfov": 3.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 28.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.2,
   "image": "this.AnimatedImageResource_BA187783_9E1F_ECE1_41C8_214E79015B76",
   "yaw": -98.46,
   "pitch": 28.04,
   "distance": 100
  }
 ],
 "id": "overlay_6BA4D606_7CC7_AB8A_41D5_1FE7684556AD",
 "data": {
  "label": "CA Lopez info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6BA335F7_7CC7_A88B_41DB_CCA2711C24E8, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "CA Lopez foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.04,
   "hfov": 3.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 17.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 107,
      "height": 82
     }
    ]
   },
   "pitch": 17.58,
   "yaw": -101.04
  }
 ],
 "id": "overlay_6B4ECDF1_7CC2_9886_41DA_DF189E07A751",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5AAD21DE_7D43_E8BD_41DA_AB8D117B77BB, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_541D4BAD_7D46_989E_41DA_DB5F8207EDA2, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Beato Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.82,
   "hfov": 13.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 7.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 378,
      "height": 604
     }
    ]
   },
   "pitch": 7.65,
   "yaw": -29.82
  }
 ],
 "id": "overlay_654B4AA3_7CFF_B88A_41DD_58C97C8EC289",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Beato Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.9,
   "hfov": 2.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 61
     }
    ]
   },
   "pitch": 9.31,
   "yaw": -29.9
  }
 ],
 "id": "overlay_654ABB66_7CC2_998D_41DA_34F2A6A04442",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_57EADF73_7DC2_998A_41D0_FC13AEBE614A, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_422B29BE_7DCE_B8FA_41CC_273190D1929F, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "JGR de Francia Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.5,
   "hfov": 25.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 28
     }
    ]
   },
   "pitch": 10.42
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.18,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_16_0.png",
      "class": "ImageResourceLevel",
      "width": 711,
      "height": 1279
     }
    ]
   },
   "pitch": 10.42,
   "yaw": 97.5
  }
 ],
 "id": "overlay_618210DB_7CC1_E8BA_41D2_24F618C89D7F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JGR de Francia Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.53,
   "hfov": 4.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_17_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 17.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 121,
      "height": 95
     }
    ]
   },
   "pitch": 17.67,
   "yaw": 98.53
  }
 ],
 "id": "overlay_62FC8820_7CC1_E785_41CA_A9F0B5B8A4B3",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_55449B6D_7D43_799E_41BE_32FF20E0245A, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_541DEBAF_7D46_989A_41B1_FA5578882B38, null, null, null, null, false)"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.6,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6FACE8F5_7CC2_988E_41D1_BFB07CD810B8",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6FACE8F5_7CC2_988E_41D1_BFB07CD810B8_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 41.48,
 "popupMaxWidth": "95%",
 "yaw": -66.16,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.57,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_69EC0FF7_7CC1_F88A_41DE_3AD336F26615",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_69EC0FF7_7CC1_F88A_41DE_3AD336F26615_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 682
   }
  ]
 },
 "pitch": 42.89,
 "popupMaxWidth": "95%",
 "yaw": 76.48,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.7,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6B5A0DC2_7CC2_988A_41BD_D4BD75A16ACE",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B5A0DC2_7CC2_988A_41BD_D4BD75A16ACE_0_3.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 17.58,
 "popupMaxWidth": "95%",
 "yaw": -101.04,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.98,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_65418B37_7CC2_998B_41CC_BE7280ED463B",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_65418B37_7CC2_998B_41CC_BE7280ED463B_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 8.23,
 "popupMaxWidth": "95%",
 "yaw": -30.01,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.16,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_62E16800_7CC1_E786_41D1_A7A8C41C1D10",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62E16800_7CC1_E786_41D1_A7A8C41C1D10_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 17.67,
 "popupMaxWidth": "95%",
 "yaw": 98.53,
 "showDuration": 500
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.43,
   "hfov": 13.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_19_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 8.46
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 386,
      "height": 608
     }
    ]
   },
   "pitch": 8.46,
   "yaw": 27.43
  }
 ],
 "id": "overlay_53E71730_7DCF_6986_41D6_4DC2CFB5500F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.65,
   "hfov": 11.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_20_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 6.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 331,
      "height": 538
     }
    ]
   },
   "pitch": 6.85,
   "yaw": 69.65
  }
 ],
 "id": "overlay_53CA4D5B_7DC1_79BB_41C1_B94F0A3E38C9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.83,
   "hfov": 1.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.17
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.87,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_21_0.png",
      "class": "ImageResourceLevel",
      "width": 52,
      "height": 52
     }
    ]
   },
   "pitch": 7.17,
   "yaw": 69.83
  }
 ],
 "id": "overlay_5310ED82_7DC1_9885_41C4_856AB9E61AE4",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5683CA4B_7DC1_7B9B_41BD_161EA766C58F, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_423619C0_7DCE_B886_41B8_9D89B19B5E95, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.71,
   "hfov": 1.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_23_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.8,
   "image": "this.AnimatedImageResource_BA1C8785_9E1F_ECE1_4189_87616AA26CD3",
   "yaw": 71.71,
   "pitch": 12.31,
   "distance": 100
  }
 ],
 "id": "overlay_46DCD89A_7CBE_B885_41CC_EB77083D836F",
 "data": {
  "label": "Info Francisco Solano"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.84,
   "hfov": 2.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_18_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_18_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 9.23,
   "yaw": 27.84
  }
 ],
 "id": "overlay_5650EBC5_7DCE_988E_41D6_F96DF7A5D377",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_57126416_7DCF_AF8A_41AA_AB184A6512A2, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_422929BF_7DCE_B8FA_41C9_3D604782A849, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.14,
   "hfov": 2.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_24_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 28.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.78,
   "image": "this.AnimatedImageResource_BA1C0786_9E1F_ECE3_41E1_EC8E7AD2BD4C",
   "yaw": 101.14,
   "pitch": 28.93,
   "distance": 100
  }
 ],
 "id": "overlay_956F425A_859C_2D9E_41CB_FA227B0B6A49",
 "data": {
  "label": "Info Jose Gaspar"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.29,
   "hfov": 2.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_25_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.15,
   "image": "this.AnimatedImageResource_BA1C5786_9E1F_ECE3_41E0_9620C38C745D",
   "yaw": -28.29,
   "pitch": 15.73,
   "distance": 100
  }
 ],
 "id": "overlay_90D59FE5_8584_F2AA_41DA_B7EA4AE268D6",
 "data": {
  "label": "Info Beato"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_9DB4192F_859C_5FB6_41DB_B26439333009, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.38,
   "hfov": 2.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_26_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.15,
   "image": "this.AnimatedImageResource_BA1D9786_9E1F_ECE3_41C5_91F6B3A65606",
   "yaw": 29.38,
   "pitch": 16.1,
   "distance": 100
  }
 ],
 "id": "overlay_9D6FBFC1_859C_72EA_41D1_D9015DFF79FA",
 "data": {
  "label": "Info Juan Pablo II"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_D530EA7A_FB82_341F_419B_CDE83A7C9D3F, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.94,
   "hfov": 6.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.67,
   "image": "this.AnimatedImageResource_BA0C977C_9E1F_EC27_41CD_7D7BE55ABF8A",
   "yaw": -127.94,
   "pitch": -6.4,
   "distance": 100
  }
 ],
 "id": "overlay_6A4DDD67_7458_C1F2_41BB_A0CB77E638B2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A, this.camera_8145BBDD_9E1F_E461_41C9_2BE4E7728FC9); this.mainPlayList.set('selectedIndex', 9)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.61,
   "hfov": 3.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.03
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.59,
   "image": "this.AnimatedImageResource_BA0CE77C_9E1F_EC27_41C3_37D816B2F3E1",
   "yaw": -121.61,
   "pitch": -3.03,
   "distance": 100
  }
 ],
 "id": "overlay_549307EB_745F_C0F1_41BA_4FB9E1DF1ECA",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534, this.camera_817E8BBD_9E1F_E420_41CD_67F63221EE5B); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.43,
   "hfov": 8.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.01,
   "image": "this.AnimatedImageResource_BA0C277C_9E1F_EC27_41D7_30C648FC014B",
   "yaw": -36.43,
   "pitch": -1.44,
   "distance": 100
  }
 ],
 "id": "overlay_6BEEA622_7458_C372_41CD_C4C9B10E8C86",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA, this.camera_81AE4BFC_9E1F_E427_41DC_B4C06EBC9D8A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": -66,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 111.67,
 "bleachingDistance": 0.4,
 "pitch": 81.96,
 "bleaching": 0.7,
 "id": "overlay_4EC05072_74CB_7FD2_41CC_D4B965AD3E43"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.09,
   "hfov": 15.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.53
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 450,
      "height": 445
     }
    ]
   },
   "pitch": 10.53,
   "yaw": -171.09
  }
 ],
 "id": "overlay_C07B9E88_CF73_A0BC_41BA_ACCDDE193D0D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.visitapy.com/mts', '_top')",
   "toolTip": "Ir al Museo de Trenes - Sapuc\u00e1i"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Historia del\u000d  Pante\u00f3n"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.8,
   "hfov": 6.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 175,
      "height": 177
     }
    ]
   },
   "pitch": 15.44,
   "yaw": -26.8,
   "distance": 50
  }
 ],
 "id": "overlay_8DAAE9CC_9E0E_E467_41E3_2DCF213E144B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.37,
   "hfov": 1.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.33
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.91,
   "image": "this.AnimatedImageResource_BA0D677D_9E1F_EC21_41D5_36E74152EAC7",
   "yaw": -45.37,
   "pitch": 14.33,
   "distance": 100
  }
 ],
 "id": "overlay_7924616C_774B_6228_41CB_04FC9FDA8187",
 "data": {
  "label": "Breve Rese\u00f1a del Paraguay"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_79C4972F_7748_AE29_41D3_D5203F685831, null, false)",
   "toolTip": "Breve Rese\u00f1a del Paraguay"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Breve Rese\u00f1a\u000ddel Paraguay"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.47,
   "hfov": 7.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_10_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": 15.75
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 207,
      "height": 188
     }
    ]
   },
   "pitch": 15.75,
   "yaw": -45.47,
   "distance": 50
  }
 ],
 "id": "overlay_8C375A73_9E11_E420_41E1_4FB49659339B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.75,
   "hfov": 1.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.9,
   "image": "this.AnimatedImageResource_BA0EF77D_9E1F_EC21_41E1_694CCD408261",
   "yaw": -26.75,
   "pitch": 14.49,
   "distance": 100
  }
 ],
 "id": "overlay_65C9D518_7748_E3E8_41C1_DDE6B84C93B0",
 "data": {
  "label": "Historia del Pante\u00f3n"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_653F64CA_7748_E268_41D1_CBE77F2670A8, null, false)",
   "toolTip": "Historia del Pante\u00f3n"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -162.67,
 "bleachingDistance": 0.4,
 "pitch": 37.75,
 "bleaching": 0.7,
 "id": "overlay_631F5239_732F_3F6E_41B5_9678C09F1CA2"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 145.33,
 "bleachingDistance": 0.4,
 "pitch": 38,
 "bleaching": 0.7,
 "id": "overlay_63EC6BF1_732F_0CE1_4171_721515DC013C"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 74.24,
 "bleachingDistance": 0.4,
 "pitch": 68.39,
 "bleaching": 0.7,
 "id": "overlay_63F4827C_732F_1FE6_41BB_F64B4E68B7DF"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -92.07,
 "bleachingDistance": 0.4,
 "pitch": 68.14,
 "bleaching": 0.7,
 "id": "overlay_63C618C0_732F_0B1F_41C9_5F3690E00421"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.27,
   "hfov": 11.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_23_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 5.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_23_0.png",
      "class": "ImageResourceLevel",
      "width": 308,
      "height": 482
     }
    ]
   },
   "pitch": 5.27,
   "yaw": -120.27
  }
 ],
 "id": "overlay_527AA054_7DC2_A78E_41D9_0F6F9AB17A85",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.51,
   "hfov": 13.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.46,
   "image": "this.AnimatedImageResource_BA6E4791_9E1F_ECE0_41D8_F46DF8D6ACC2",
   "yaw": -127.51,
   "pitch": -7.1,
   "distance": 100
  }
 ],
 "id": "overlay_4547CAF1_74C9_C0EE_41B8_D700698A4B8D",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D747778_7323_05EE_41DC_97522F54C128, this.camera_BACE1839_9E1F_E420_41D3_B6E638379DB0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.57,
   "hfov": 9.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.14
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.84,
   "image": "this.AnimatedImageResource_BA6F8791_9E1F_ECE0_41DF_8749874CCCAD",
   "yaw": 109.57,
   "pitch": -7.14,
   "distance": 100
  }
 ],
 "id": "overlay_4597D804_74CB_4F37_41D4_D30847642505",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB, this.camera_8001795A_9E1F_E463_41DB_77A527E99165); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.35,
   "hfov": 12.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.13,
   "image": "this.AnimatedImageResource_BA6FE791_9E1F_ECE0_41DF_20E01633825A",
   "yaw": 129.35,
   "pitch": -15.72,
   "distance": 100
  }
 ],
 "id": "overlay_595CF13E_74C8_C153_41BE_B8902DA3E0BE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_801A3979_9E1F_E420_41D7_DF87A97B7334); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.97,
   "hfov": 9.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.9,
   "image": "this.AnimatedImageResource_BA6F2791_9E1F_ECE0_41DA_A021540332AE",
   "yaw": 171.97,
   "pitch": -9.04,
   "distance": 100
  }
 ],
 "id": "overlay_5A0B24BA_74C9_4752_41A0_F26068F5677B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_BAD69876_9E1F_E423_41D5_169BBFC39ABE); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.35,
   "hfov": 17.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.59,
   "image": "this.AnimatedImageResource_BA6F5791_9E1F_ECE0_41C3_CCF2E40009B8",
   "yaw": -147.35,
   "pitch": -9.64,
   "distance": 100
  }
 ],
 "id": "overlay_443486C1_74C9_432E_41D1_AF766A53550B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0, this.camera_BAFAA802_9E1F_E3E3_41C3_E862E66B8E57); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -118.47,
   "hfov": 1.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.85
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.9,
   "image": "this.AnimatedImageResource_BA60C791_9E1F_ECE0_41C4_C252BDA102DD",
   "yaw": -118.47,
   "pitch": 10.85,
   "distance": 100
  }
 ],
 "id": "overlay_6EF7314C_7948_A268_41CF_44989850F8EB",
 "data": {
  "label": "JFEstigarribia info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_6EE4211A_7948_A3E8_41D5_0FDB9A23EF72, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JFEstigarribia foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.54,
   "hfov": 1.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 5.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.33,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 46
     }
    ]
   },
   "pitch": 5.76,
   "yaw": -120.54
  }
 ],
 "id": "overlay_6EF7C14C_7948_A268_41B1_8F488E12A8DE",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6EFB211C_7948_A3E8_41D1_E81BBB5FA415, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_6EFB311C_7948_A3E8_41D6_721F2868B881, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.19,
   "hfov": 2.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.51
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": -15.51,
   "yaw": -9.19
  }
 ],
 "id": "overlay_6F138C5B_7CC2_FFBB_41CA_5A6DB7C54CE8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_69E9AC0B_7CC2_BF9A_41D0_549D817F3770, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5E2125EB_7CC1_A89A_41D7_E9962AEEA7B8, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.1,
   "hfov": 2.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": -3.27,
   "yaw": -9.1
  }
 ],
 "id": "overlay_692CBB65_7CC3_798F_41C8_2BBA042E542F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6B81FAD8_7CC2_B886_4192_33E86037436A, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5E2145EB_7CC1_A89A_41A5_60C47CFF5D83, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.77,
   "hfov": 1.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 55.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 55.91,
   "yaw": -17.77
  }
 ],
 "id": "overlay_68A9C086_7CC2_A88D_41D3_5F0383B1E29E",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6F0CF5DC_7CC1_A8BE_41D5_7A2417999B83, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5E21E5EB_7CC1_A89A_41D7_4415EB2FC698, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.53,
   "hfov": 1.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 40.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 40.6,
   "yaw": 107.53
  }
 ],
 "id": "overlay_69B247F8_7CC1_6886_41D3_84F4B57D4655",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_57BD21E6_7D42_A88A_41DD_386A14969465, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4EE00053_7D43_A78B_4190_49F82A4ABB2E, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.78,
   "hfov": 1.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 42.61
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 42.61,
   "yaw": -113.78
  }
 ],
 "id": "overlay_68F59811_7CC7_6786_41C3_6BCA7112D468",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5133DA93_7D43_788A_4195_473DB2431260, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4EE35054_7D43_A78D_4194_A14BEA529F2E, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "CA Lopez Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.99,
   "hfov": 12.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 28
     }
    ]
   },
   "pitch": 5.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.11,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 337,
      "height": 593
     }
    ]
   },
   "pitch": 5.64,
   "yaw": -160.99
  }
 ],
 "id": "overlay_6B3F2B44_7CC1_998E_41C6_453684498497",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.99,
   "hfov": 2.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 13.06
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.22,
   "image": "this.AnimatedImageResource_BA629793_9E1F_ECE0_41C6_C74DD72D0018",
   "yaw": -158.99,
   "pitch": 13.06,
   "distance": 100
  }
 ],
 "id": "overlay_6B1784D2_7CC1_688A_41C5_1693954F6213",
 "data": {
  "label": "CA Lopez info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6B1AB4C2_7CC1_688A_41C0_97C126E67E6D, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "CA Lopez foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.33,
   "hfov": 1.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 53
     }
    ]
   },
   "pitch": 7.35,
   "yaw": -161.33
  }
 ],
 "id": "overlay_64DBD141_7CC1_A986_41DC_631A13120D60",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5AE5B33A_7D4F_69FA_41C7_16A9498D7587, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_540B4BC2_7D46_988A_41D4_0785272F4B3B, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Beato Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.85,
   "hfov": 21.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 29
     }
    ]
   },
   "pitch": 9.19
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_16_0.png",
      "class": "ImageResourceLevel",
      "width": 607,
      "height": 1115
     }
    ]
   },
   "pitch": 9.19,
   "yaw": -95.85
  }
 ],
 "id": "overlay_657C85EA_7CC1_6885_41D9_24CDD67A7117",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Beato Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.38,
   "hfov": 2.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_17_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 14.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 84,
      "height": 99
     }
    ]
   },
   "pitch": 14.96,
   "yaw": -95.38
  }
 ],
 "id": "overlay_654B3F22_7CC2_B985_41C5_7FB184F1EC10",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_54273946_7D4F_B98A_41DA_F36DBD50FE18, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_540ACBC3_7D46_988A_41C9_13CC83B4F284, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "JGR de Francia Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.44,
   "hfov": 14.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_18_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 6.05
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_18_0.png",
      "class": "ImageResourceLevel",
      "width": 408,
      "height": 648
     }
    ]
   },
   "pitch": 6.05,
   "yaw": 144.44
  }
 ],
 "id": "overlay_6758C316_7CC3_698A_41D0_522DC7BF8F93",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JGR de Francia Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.29,
   "hfov": 2.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_19_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.13,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 6.76,
   "yaw": 144.29
  }
 ],
 "id": "overlay_62A48D5F_7CCE_99BA_41D2_0452C645DA8B",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_550516AE_7D4E_E89A_41C9_10FB0D0EB8C9, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_540A5BC4_7D46_988E_41C8_DB11B1FFAF26, null, null, null, null, false)"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.99,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6B25F113_7CC1_A98B_41D1_39883E487194",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B25F113_7CC1_A98B_41D1_39883E487194_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 7.35,
 "popupMaxWidth": "95%",
 "yaw": -161.33,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.93,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6541DF02_7CC2_B98A_41C5_0C282491D2C2",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6541DF02_7CC2_B98A_41C5_0C282491D2C2_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 14.96,
 "popupMaxWidth": "95%",
 "yaw": -95.38,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.13,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_62D1ED37_7CCE_998A_41DD_980203AD3DEF",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62D1ED37_7CCE_998A_41DD_980203AD3DEF_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 6.76,
 "popupMaxWidth": "95%",
 "yaw": 144.29,
 "showDuration": 500
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 77.89,
   "hfov": 2.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_20_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 76
     }
    ]
   },
   "pitch": 16.41,
   "yaw": 77.89
  }
 ],
 "id": "overlay_515F8C99_7DC2_9886_41D7_61753BD493E0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_57876DD0_7DC2_9886_41D0_6B904F21FC2A, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_420A19D6_7DCE_B88A_41D1_A3FEA33A687B, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.37,
   "hfov": 24.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 11.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_21_0.png",
      "class": "ImageResourceLevel",
      "width": 690,
      "height": 1135
     }
    ]
   },
   "pitch": 11.54,
   "yaw": 78.37
  }
 ],
 "id": "overlay_57957905_7DC2_998E_41DA_C37C84E61268",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.11,
   "hfov": 13.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_22_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ]
   },
   "pitch": 5.79
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_22_0.png",
      "class": "ImageResourceLevel",
      "width": 386,
      "height": 554
     }
    ]
   },
   "pitch": 5.79,
   "yaw": 103.11
  }
 ],
 "id": "overlay_52F72CF9_7DC3_F886_41D8_354B2AF8FF85",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.34,
   "hfov": 1.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_24_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.74
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.63,
   "image": "this.AnimatedImageResource_BA645794_9E1F_ECE1_41D5_C24D9A27D0E3",
   "yaw": 104.34,
   "pitch": 10.74,
   "distance": 100
  }
 ],
 "id": "overlay_4676159A_7CBF_A8BA_41D9_B2D0A31AE00E",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.69,
   "hfov": 1.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_25_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 6.03
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_25_0.png",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 41
     }
    ]
   },
   "pitch": 6.03,
   "yaw": 102.69
  }
 ],
 "id": "overlay_44555707_7CBE_E98A_4198_6FB953D13905",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_47AD401E_7F41_67BA_41C7_8C81EEF7507C, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_3D3B8A66_7F46_9B8A_41D3_0C5D1807C52C, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.75,
   "hfov": 2.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_26_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 12.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.11,
   "image": "this.AnimatedImageResource_BA65E795_9E1F_ECE0_41E0_F7CBA52B6DF4",
   "yaw": 145.75,
   "pitch": 12.91,
   "distance": 100
  }
 ],
 "id": "overlay_96276FEF_858C_32B6_41D0_781F1DB047BE",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.82,
   "hfov": 3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_27_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 28.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.26,
   "image": "this.AnimatedImageResource_BA649795_9E1F_ECE0_41D5_AE5EEC3570B2",
   "yaw": -92.82,
   "pitch": 28.56,
   "distance": 100
  }
 ],
 "id": "overlay_907AFE62_859F_F5AE_41C9_1550C07F1298",
 "data": {
  "label": "Info Beato"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_907FBE4C_859F_F5FB_418B_39BD5CD908E7, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.95,
   "hfov": 3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_28_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.26,
   "image": "this.AnimatedImageResource_BA640796_9E1F_ECE0_41B4_3391C0410B8F",
   "yaw": 79.95,
   "pitch": 27.69,
   "distance": 100
  }
 ],
 "id": "overlay_92008456_8584_5596_41AB_DAD576ACB00B",
 "data": {
  "label": "Info Juan Pablo II"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_921B3444_8584_55EA_41D5_BC5AE0C58944, 'showEffect', false)"
  }
 ]
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA41D7AA_9E1F_EC23_41DD_773ED1FA4E68, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA41D7AA_9E1F_EC23_41DD_773ED1FA4E68",
 "camera": "this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA42F7AB_9E1F_EC21_41C1_4E449EA9123E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "media": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA42F7AB_9E1F_EC21_41C1_4E449EA9123E",
 "camera": "this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA43E7AB_9E1F_EC21_41C5_C1F735164C52, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "media": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA43E7AB_9E1F_EC21_41C5_C1F735164C52",
 "camera": "this.panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA4407AC_9E1F_EC27_41CC_DA434E8A359B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA4407AC_9E1F_EC27_41CC_DA434E8A359B",
 "camera": "this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA4537AD_9E1F_EC21_41E0_7429EE5C7C84, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA4537AD_9E1F_EC21_41E0_7429EE5C7C84",
 "camera": "this.panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA4667AD_9E1F_EC21_4154_B7A4A66C16AA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA4667AD_9E1F_EC21_4154_B7A4A66C16AA",
 "camera": "this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA58C7AE_9E1F_EC23_41A8_EF22F630FA90, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA58C7AE_9E1F_EC23_41A8_EF22F630FA90",
 "camera": "this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA5907AF_9E1F_EC21_4170_C90AB477A694, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "media": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA5907AF_9E1F_EC21_4170_C90AB477A694",
 "camera": "this.panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA5A47B0_9E1F_EC3F_41DB_12BD043D7CF2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "media": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA5A47B0_9E1F_EC3F_41DB_12BD043D7CF2",
 "camera": "this.panorama_7D747778_7323_05EE_41DC_97522F54C128_camera"
},
{
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA5B67B0_9E1F_EC3F_41C7_0EBDF3E955BC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "media": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA5B67B0_9E1F_EC3F_41C7_0EBDF3E955BC",
 "camera": "this.panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_camera"
},
{
 "class": "PanoramaPlayListItem",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_BA5C67B1_9E1F_EC21_41CF_0AB6340B56B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 0)",
 "media": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_BA5C67B1_9E1F_EC21_41CF_0AB6340B56B7",
 "camera": "this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_camera"
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 27.76,
 "bleachingDistance": 0.4,
 "pitch": 40.26,
 "bleaching": 0.7,
 "id": "overlay_63F60DAD_732F_0561_41AF_4D254467E807"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": 164.42,
 "bleachingDistance": 0.4,
 "pitch": 47.04,
 "bleaching": 0.7,
 "id": "overlay_63CC16EF_732F_04E1_41CB_331CCC76E9B0"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.91,
   "hfov": 16.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_19_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 25
     }
    ]
   },
   "pitch": 8.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 476,
      "height": 753
     }
    ]
   },
   "pitch": 8.56,
   "yaw": 178.91
  }
 ],
 "id": "overlay_53BD8953_7DC1_998A_41CF_5DE92D726EF0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 13.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.22
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.71,
   "image": "this.AnimatedImageResource_BA66E797_9E1F_ECE0_41D8_1D783A3AEF28",
   "yaw": 0,
   "pitch": -7.22,
   "distance": 100
  }
 ],
 "id": "overlay_586D65A0_74C8_C16E_41DB_14CF96C489C8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77, this.camera_81F16C5A_9E1F_FC63_41D3_8CF62363DFF2); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.34,
   "hfov": 18.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.74
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.76,
   "image": "this.AnimatedImageResource_BA664797_9E1F_ECE0_41DA_A953D2193F01",
   "yaw": 44.34,
   "pitch": -10.74,
   "distance": 100
  }
 ],
 "id": "overlay_595373DB_74C9_C0D2_41AA_AC044C0AED8F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0, this.camera_8192CC3A_9E1F_FC20_41D7_684AF5A1304A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.64,
   "hfov": 15.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.9,
   "image": "this.AnimatedImageResource_BA678797_9E1F_ECE0_41D1_2BEB818DAC65",
   "yaw": -53.64,
   "pitch": -8.6,
   "distance": 100
  }
 ],
 "id": "overlay_595ED036_74C9_5F52_41D4_E5260BFB43A6",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A, this.camera_81DF7C7C_9E1F_FC27_41D4_AAFB7FA8C997); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.5,
   "hfov": 17.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.58,
   "image": "this.AnimatedImageResource_BA67C798_9E1F_ECE0_41C3_5D4A2C9F06FC",
   "yaw": -179.5,
   "pitch": -13.63,
   "distance": 100
  }
 ],
 "id": "overlay_5AFB6EF8_74D7_40DE_41C9_742ECC774634",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7D747778_7323_05EE_41DC_97522F54C128, this.camera_81887C1C_9E1F_E3E0_41BB_EFD23C1599D9); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -28.76,
 "bleachingDistance": 0.4,
 "pitch": 63.12,
 "bleaching": 0.7,
 "id": "overlay_4EA59A9E_74C9_4352_41C6_955F836F751F"
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -37.56,
 "bleachingDistance": 0.4,
 "pitch": 42.27,
 "bleaching": 0.7,
 "id": "overlay_471EE849_74C8_CF31_41DA_A1F34A8CB675"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.36,
   "hfov": 2.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.89,
   "image": "this.AnimatedImageResource_BA676798_9E1F_ECE0_41DB_3F54DCABBC5C",
   "yaw": -178.36,
   "pitch": 16.66,
   "distance": 100
  }
 ],
 "id": "overlay_483C7A05_75BB_4336_4178_9B610604F6B3",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_49CD1078_7479_3FDE_4199_990D6D60F6FA, true, 0, this.effect_482879CD_75BB_4136_41D7_757E609EE41F, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.7,
   "hfov": 1.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": 9.77
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 47,
      "height": 59
     }
    ]
   },
   "pitch": 9.77,
   "yaw": 178.7
  }
 ],
 "id": "overlay_483C6A05_75BB_4336_41A1_EA4959113365",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_483359CE_75BB_4132_41C8_2385EBA46B9F, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_483349CE_75BB_4132_41CC_BB9AF1EF6966, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.13,
   "hfov": 1.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 54.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 54.16,
   "yaw": -170.13
  }
 ],
 "id": "overlay_6F835B9F_7CC1_F8BA_41AF_DD8E58BBB5F1",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_572AC3F4_7D7E_A88E_41D9_6EA4451F7047, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4EE98058_7D43_A785_4191_69DE0063FA42, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "CA Lopez Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.62,
   "hfov": 28.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 23
     }
    ]
   },
   "pitch": 12.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 28.99,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 825,
      "height": 1215
     }
    ]
   },
   "pitch": 12.76,
   "yaw": 104.62
  }
 ],
 "id": "overlay_6B5D9D75_7CC3_998E_41D3_263894A6698F",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.91,
   "hfov": 3.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.26
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.64,
   "image": "this.AnimatedImageResource_BA785798_9E1F_ECE0_41D0_77A97E1AE828",
   "yaw": 107.91,
   "pitch": 27.26,
   "distance": 100
  }
 ],
 "id": "overlay_6B4C7C0F_7CC1_9F9B_41D9_E10843E21C7D",
 "data": {
  "label": "CA Lopez info"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72FF3275_7CC1_EB8F_41D7_A10A2F0ADD93, true, 0, this.effect_6B576BFF_7CC1_987A_41D4_F423817BBAB3, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "CA Lopez foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.81,
   "hfov": 3.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 15.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 106,
      "height": 85
     }
    ]
   },
   "pitch": 15.35,
   "yaw": 103.81
  }
 ],
 "id": "overlay_6B739F5E_7CFE_F9BD_41D3_5B5544532AC2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_55530E52_7D41_7B85_41D3_D21BAEE45E56, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_54085BC7_7D46_9889_41CD_33EED883FBC8, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Beato Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.52,
   "hfov": 24.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 11.53
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.94,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 707,
      "height": 1159
     }
    ]
   },
   "pitch": 11.53,
   "yaw": -105.52
  }
 ],
 "id": "overlay_653F1755_7CC2_A98E_41AA_FE32D6513AB4",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Beato Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.35,
   "hfov": 2.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.12
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 85,
      "height": 89
     }
    ]
   },
   "pitch": 14.12,
   "yaw": -106.35
  }
 ],
 "id": "overlay_65415B61_7CC1_B986_41C8_3BB63B98135A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5AD46AF7_7D41_988B_41D2_34392F1C5D8A, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_54097BC9_7D46_9886_41C3_47E3B4083276, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "JGR de Francia Title"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.1,
   "hfov": 14.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": 5.1
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 416,
      "height": 726
     }
    ]
   },
   "pitch": 5.1,
   "yaw": 29.1
  }
 ],
 "id": "overlay_670A89E6_7CC3_788A_41CB_DD2C6EA7E9E0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "JGR de Francia Foto"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.62,
   "hfov": 2.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 7.72,
   "yaw": 29.62
  }
 ],
 "id": "overlay_62F4BF37_7CCF_998A_41C9_FFA1EE8A34B9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_5ADA3A09_7D41_FB87_41D6_CF50F3B065E8, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_5408FBCA_7D46_989A_41DF_112EBEA8F847, null, null, null, null, false)"
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 1.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6F8E3B80_7CC1_F885_41B0_913E3BAED8BD",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6F8E3B80_7CC1_F885_41B0_913E3BAED8BD_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 610
   }
  ]
 },
 "pitch": 54.16,
 "popupMaxWidth": "95%",
 "yaw": -170.13,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.71,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_6B7D4F3E_7CFE_F9FA_41C0_34FE098A0293",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6B7D4F3E_7CFE_F9FA_41C0_34FE098A0293_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 585,
    "height": 1024
   }
  ]
 },
 "pitch": 15.35,
 "popupMaxWidth": "95%",
 "yaw": 103.81,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.98,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_657A8B38_7CC1_B986_41DC_E13ED9FBF025",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_657A8B38_7CC1_B986_41DC_E13ED9FBF025_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 14.12,
 "popupMaxWidth": "95%",
 "yaw": -106.35,
 "showDuration": 500
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.12,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "id": "popup_62E09F08_7CCF_9986_41B4_C612C7ED3D38",
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_62E09F08_7CCF_9986_41B4_C612C7ED3D38_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 682,
    "height": 1024
   }
  ]
 },
 "pitch": 7.72,
 "popupMaxWidth": "95%",
 "yaw": 29.62,
 "showDuration": 500
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.14,
   "hfov": 2.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_15_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 35.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 73
     }
    ]
   },
   "pitch": 35.25,
   "yaw": 3.14
  }
 ],
 "id": "overlay_56563579_7D41_A987_41D8_729A99DD2A83",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_54DDE3E5_7D41_688F_41D0_423EE142D2CE, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_4EEC705B_7D43_A7BB_41B2_AA05D122AFD1, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.54,
   "hfov": 9.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 27
     }
    ]
   },
   "pitch": 5.04
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.15,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_16_0.png",
      "class": "ImageResourceLevel",
      "width": 255,
      "height": 441
     }
    ]
   },
   "pitch": 5.04,
   "yaw": -0.54
  }
 ],
 "id": "overlay_57C61ECA_7DC7_F89A_41D3_549241EF15C2",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.51,
   "hfov": 2.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_17_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.5
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 7.5,
   "yaw": -30.51
  }
 ],
 "id": "overlay_50DB5142_7DC7_6985_41DA_5BEDCC86A515",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_52A35B1A_7DC6_99BA_419E_C8DEEFABF34D, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_421529DC_7DCE_B8BE_41D3_B3BEFE60A942, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.46,
   "hfov": 13.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_18_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ]
   },
   "pitch": 6.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_18_0.png",
      "class": "ImageResourceLevel",
      "width": 385,
      "height": 629
     }
    ]
   },
   "pitch": 6.18,
   "yaw": -30.46
  }
 ],
 "id": "overlay_5697BC41_7DC6_9F86_41C0_098ED4A0BC90",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.54,
   "hfov": 1.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_20_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 4.33
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 42,
      "height": 47
     }
    ]
   },
   "pitch": 4.33,
   "yaw": -0.54
  }
 ],
 "id": "overlay_446E8442_7F41_AF85_41D0_88E2315CE5B0",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_47001AD2_7F42_9885_41B9_403B7B62136B, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_3D43EA6E_7F46_9B9A_41D7_AF559CF80C20, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.9,
   "hfov": 1.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 8.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.58,
   "image": "this.AnimatedImageResource_BA7C979A_9E1F_ECE0_41C7_127B392A8ACA",
   "yaw": 0.9,
   "pitch": 8.72,
   "distance": 100
  }
 ],
 "id": "overlay_4570523C_7F42_EBFE_41D4_B187085228BD",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_72DFDA82_7CC6_B885_41B9_702B6A474553, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -76.08,
   "hfov": 1.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_22_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 39.45
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_22_0.png",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 59
     }
    ]
   },
   "pitch": 39.45,
   "yaw": -76.08
  }
 ],
 "id": "overlay_442D0A08_7F42_BB85_41A8_DC46CB68C14A",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45418F33_7F42_9989_41D5_287A481E4D1C, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_3D422A6F_7F46_9B9A_41DF_1CDCABD2E350, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.76,
   "hfov": 1.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_23_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 15
     }
    ]
   },
   "pitch": -7.26
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_23_0.png",
      "class": "ImageResourceLevel",
      "width": 53,
      "height": 49
     }
    ]
   },
   "pitch": -7.26,
   "yaw": -67.76
  }
 ],
 "id": "overlay_46F858D3_7F41_B88B_41DA_2DFDEFFAC8F8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_44EC61FE_7F41_E87A_41C4_785622A36C4B, {'rollOverIconHeight':20,'pressedBackgroundOpacity':0.3,'paddingBottom':5,'rollOverIconWidth':20,'pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'rollOverBorderColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'iconWidth':20,'paddingLeft':5,'borderColor':'#000000','paddingRight':5,'rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20}, this.ImageResource_3D416A70_7F46_9B86_41BC_7292B36898FB, null, null, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.15,
   "hfov": 2.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_24_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.34
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.47,
   "image": "this.AnimatedImageResource_BA7C679B_9E1F_ECE0_41E0_472A0C82BBC2",
   "yaw": 31.15,
   "pitch": 14.34,
   "distance": 100
  }
 ],
 "id": "overlay_9626F06E_858C_EDB6_41E0_89ED6D620AE2",
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_940A84D7_859C_5696_41D3_DFA64C65F768, true, 0, null, null, false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.19,
   "hfov": 3.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_25_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 27.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.32,
   "image": "this.AnimatedImageResource_BA7DA79B_9E1F_ECE0_41D8_3F5BE6B5221B",
   "yaw": -103.19,
   "pitch": 27.73,
   "distance": 100
  }
 ],
 "id": "overlay_9075A395_859C_336A_41C0_AB3D240701BA",
 "data": {
  "label": "Info Beato"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_91D08F1A_858B_F39E_41D8_8E04515FBAC9, true, 0, this.effect_90797384_859C_336A_41D7_FDEE4ABD0EFD, 'showEffect', false)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.28,
   "hfov": 2.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_26_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 14.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.31,
   "image": "this.AnimatedImageResource_BA7DF79B_9E1F_ECE0_41C7_46A5DE760C64",
   "yaw": -29.28,
   "pitch": 14.58,
   "distance": 100
  }
 ],
 "id": "overlay_921A6D26_858B_F7B6_41D8_873B14B38D80",
 "data": {
  "label": "Info Juan Pablo II"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_904F4090_8587_ED6A_41DB_8F0D83FA0228, true, 0, this.effect_92172D15_858B_F76A_41D2_74125918E909, 'showEffect', false)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 45,
 "angle": 118,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ]
 },
 "rotate": false,
 "id": "panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.93,
   "hfov": 7.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_BA7447A0_9E1F_EC20_41CA_A0032C45BCA7",
   "yaw": -11.93,
   "pitch": -4.21,
   "distance": 100
  }
 ],
 "id": "overlay_54998E8E_7459_4333_41AA_37BC2D265505",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7E9F9926_7321_0D63_41D9_C2B20675C534, this.camera_BE3EAC9C_9E1F_FCE7_41DD_B3B31D47E7AB); this.mainPlayList.set('selectedIndex', 10)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 03"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.8,
   "hfov": 8.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.02
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.2,
   "image": "this.AnimatedImageResource_BA75A7A0_9E1F_EC20_41E0_DF68BF7B5853",
   "yaw": 149.8,
   "pitch": -6.02,
   "distance": 100
  }
 ],
 "id": "overlay_50F3AE8E_7459_4332_41BB_5E042B2313C9",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6, this.camera_BE790CD6_9E1F_FC60_41E2_878D2D4E5D46); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02 Left"
 },
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.87,
   "hfov": 6.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.03
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.8,
   "image": "this.AnimatedImageResource_BA75F7A0_9E1F_EC20_41DA_3FAF0320B4E2",
   "yaw": 120.87,
   "pitch": -1.03,
   "distance": 50
  }
 ],
 "id": "overlay_5509354F_7457_4132_41CE_168B78672CE8",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7E911130_7321_FD7E_41C8_3413131F93CA, this.camera_BE1ABCB8_9E1F_FC20_41C5_DD025E36706A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "yaw": -165.93,
 "bleachingDistance": 0.4,
 "pitch": 85.73,
 "bleaching": 0.7,
 "id": "overlay_470916D9_74CB_40DE_41DC_40CDA3F4A04C"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA0F477E_9E1F_EC23_41C2_1FE9240CD1BF",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA0F777E_9E1F_EC23_41CC_17794F56075D",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E911130_7321_FD7E_41C8_3413131F93CA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA00C77F_9E1F_EC21_41C8_056BBC20119E",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA7617A1_9E1F_EC20_41AA_F0A332DE4FC3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA7657A1_9E1F_EC20_41D1_0E4139482433",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E9F9926_7321_0D63_41D9_C2B20675C534_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA77A7A1_9E1F_EC20_41E3_BEF65ACC21AD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA7FB79C_9E1F_ECE0_41D4_F63222DF2B10",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA7F179D_9E1F_ECE0_41C6_9E97629E16ED",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA7F679D_9E1F_ECE0_41C6_CDCAC4489496",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA70979D_9E1F_ECE0_41D6_41CFB233139B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA70079D_9E1F_ECE0_41CE_DA833EA86753",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_15_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_BA72779F_9E1F_ECE0_41E1_F58C22A34311",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D747778_7323_05EE_41DC_97522F54C128_1_HS_16_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA73E79F_9E1F_ECE0_41DF_6917DE709959",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA021780_9E1F_ECDF_41BD_CAF4F2CF2952",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA025780_9E1F_ECDF_41E0_3EAD49ED2AC5",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DD24BCD_7323_0D26_41D2_325E53A4972A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA039780_9E1F_ECDF_41CA_31C944494E78",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA1F8787_9E1F_ECE1_41D4_0A11EB8FCD40",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA1FC787_9E1F_ECE1_41D8_4D5FC0A4C2DA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA1F1788_9E1F_ECEF_41B5_0F91D353AC1A",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA109788_9E1F_ECEF_418C_FB5066B6E9F2",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA1F1789_9E1F_ECE1_41E2_DE22E8B668A9",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_16_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA11478A_9E1F_ECE3_417B_7CBBB4AC2D94",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D984498_7327_1B2E_41D4_A6C7EDC18DEB_1_HS_17_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA12578A_9E1F_ECE3_41C6_D50E6D3BD227",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA15C78C_9E1F_ECE7_41B2_DAE0224AC8FD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA15078C_9E1F_ECE7_41D2_B0A4F8C7DB92",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA15478C_9E1F_ECE7_41E2_FEE3A5A3E5F2",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA16B78C_9E1F_ECE7_41E3_883BE98B1895",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA16278D_9E1F_ECE1_41E1_8E9F697CF84F",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_13_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA68278E_9E1F_ECE3_41D4_702DD549E888",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_23_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA6BD78E_9E1F_ECE0_41D7_0A6AA8006E57",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_25_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA6B478F_9E1F_ECE0_41C0_437B872B483F",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_26_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA6C978F_9E1F_ECE0_41E3_37FF646ECEBD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7A9EC2_7327_0723_41D6_504CB8644D77_1_HS_27_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA6CE78F_9E1F_ECE0_41BC_3FF32067DA03",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA05F781_9E1F_ECE1_41E3_6C45AC0AB5DD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA054782_9E1F_ECE3_41DE_AFADCD6D018E",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA069782_9E1F_ECE3_41CF_FB435F765787",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA06C782_9E1F_ECE3_41DA_4F484370C8EE",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA062782_9E1F_ECE3_41C0_7DF590523E04",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA078783_9E1F_ECE1_41C1_7D00819557FA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA07E783_9E1F_ECE1_41CB_99C0292F04E1",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_12_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA187783_9E1F_ECE1_41C8_214E79015B76",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_23_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA1C8785_9E1F_ECE1_4189_87616AA26CD3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_24_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA1C0786_9E1F_ECE3_41E1_EC8E7AD2BD4C",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_25_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA1C5786_9E1F_ECE3_41E0_9620C38C745D",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D7E65A5_7321_0566_41C3_6CB72BAAA5A0_1_HS_26_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA1D9786_9E1F_ECE3_41C5_91F6B3A65606",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA0C977C_9E1F_EC27_41CD_7D7BE55ABF8A",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA0CE77C_9E1F_EC27_41C3_37D816B2F3E1",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA0C277C_9E1F_EC27_41D7_30C648FC014B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_BA0D677D_9E1F_EC21_41D5_36E74152EAC7",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_790A0575_7448_C1D6_41D5_F31C9DFBDEC6_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_BA0EF77D_9E1F_EC21_41E1_694CCD408261",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA6E4791_9E1F_ECE0_41D8_F46DF8D6ACC2",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA6F8791_9E1F_ECE0_41DF_8749874CCCAD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA6FE791_9E1F_ECE0_41DF_20E01633825A",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA6F2791_9E1F_ECE0_41DA_A021540332AE",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA6F5791_9E1F_ECE0_41C3_CCF2E40009B8",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA60C791_9E1F_ECE0_41C4_C252BDA102DD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_14_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA629793_9E1F_ECE0_41C6_C74DD72D0018",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_24_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA645794_9E1F_ECE1_41D5_C24D9A27D0E3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_26_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA65E795_9E1F_ECE0_41E0_F7CBA52B6DF4",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_27_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA649795_9E1F_ECE0_41D5_AE5EEC3570B2",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7DA47E2A_7321_0763_41D8_ADCEA0CD2E0A_1_HS_28_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA640796_9E1F_ECE0_41B4_3391C0410B8F",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA66E797_9E1F_ECE0_41D8_1D783A3AEF28",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA664797_9E1F_ECE0_41DA_A953D2193F01",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA678797_9E1F_ECE0_41D1_2BEB818DAC65",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA67C798_9E1F_ECE0_41C3_5D4A2C9F06FC",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA676798_9E1F_ECE0_41DB_3F54DCABBC5C",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA785798_9E1F_ECE0_41D0_77A97E1AE828",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_21_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA7C979A_9E1F_ECE0_41C7_127B392A8ACA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_24_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA7C679B_9E1F_ECE0_41E0_472A0C82BBC2",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_25_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA7DA79B_9E1F_ECE0_41D8_3F5BE6B5221B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7D4B5FF8_7321_04EE_41A1_66B744C23EB0_1_HS_26_0.png",
   "class": "ImageResourceLevel",
   "width": 580,
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_BA7DF79B_9E1F_ECE0_41C7_46A5DE760C64",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA7447A0_9E1F_EC20_41CA_A0032C45BCA7",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA75A7A0_9E1F_EC20_41E0_DF68BF7B5853",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7EF9CCF6_732F_04E2_4190_15272D30A30A_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_BA75F7A0_9E1F_EC20_41DA_3FAF0320B4E2",
 "colCount": 4,
 "frameDuration": 41
}],
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "defaultVRPointer": "laser",
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "overflow": "hidden",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player468"
 }
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


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
