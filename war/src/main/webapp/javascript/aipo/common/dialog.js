/*
 * Aipo is a groupware program developed by Aimluck,Inc.
 * Copyright (C) 2004-2011 Aimluck,Inc.
 * http://www.aipo.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

dojo.provide("aipo.common");

aipo.common.showDialog = function(url, portlet_id, callback) {
    var arrDialog = dijit.byId("modalDialog");
    dojo.query(".roundBlockContent").addClass("mb_dialoghide");
    dojo.query("#modalDialog").addClass("mb_dialog");
    if(! arrDialog){
       arrDialog = new aimluck.widget.Dialog({widgetId:'modalDialog', _portlet_id: portlet_id, _callback:callback}, "modalDialog");
    }else{
       arrDialog.setCallback(portlet_id, callback);
    }
    if(arrDialog){
      arrDialog.setHref(url);
      arrDialog.show();
    }
};

aipo.common.hideDialog = function() {
    var arrDialog = dijit.byId("modalDialog");
    if(arrDialog){
      arrDialog.hide();
    }
};
aipo.common.showDialogSub = function(url, portlet_id, callback) {
    var arrDialogSub = dijit.byId('modalDialog');
	 var userAgent = window.navigator.userAgent.toLowerCase();
	 dojo.query(".roundBlockContent").addClass("mb_dialoghide");
    if(! arrDialogSub){
       arrDialogSub = new aimluck.widget.DialogSub({widgetId:'modalDialog', _portlet_id: portlet_id, _callback:callback ,templateString:"<div id='modalDialog' class='modalDialog' dojoattachpoint='wrapper'><span dojoattachpoint='tabStartOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap'tabindex='0'></span><span dojoattachpoint='tabStart' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><div dojoattachpoint='containerNode' style='position: relative; z-index: 2;'></div><span dojoattachpoint='tabEnd' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><span dojoattachpoint='tabEndOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span></div>"
}, "modalDialog");
    }else{
       arrDialogSub.setCallback(portlet_id, callback);
    }

    if(arrDialogSub){
      arrDialogSub.setHref(url);
      arrDialogSub.show();
    }
};

aipo.common.hideDialogSub = function() {
    dijit.byId('modalDialog').hide();
};
aipo.common.customizeDialog=function(){
	if(dojo.byId("data-activecustomizeurl") != undefined && dojo.byId("data-activecustomizeurl") !=""){
		var url=dojo.byId("data-activecustomizeurl").value;
		aipo.common.showDialog(url);
	}
}

aipo.common.showsupportDialog = function(url, portlet_id, callback) {
    var arrDialog = dijit.byId("supportDialog");
    dojo.query(".roundBlockContent").addClass("mb_dialoghide");
    dojo.query("#supportDialog").addClass("mb_dialog");
    if(! arrDialog){
       arrDialog = new aimluck.widget.Dialog({widgetId:'supportDialog', _portlet_id: portlet_id, _callback:callback}, "supportDialog");
    }else{
       arrDialog.setCallback(portlet_id, callback);
    }
    if(arrDialog){
      arrDialog.setHref(url);
      arrDialog.show();
    }
};

aipo.common.hidesupportDialog = function() {
    var arrDialog = dijit.byId("supportDialog");
    if(arrDialog){
      arrDialog.hide();
    }
};
aipo.common.showsupportDialogSub = function(url, portlet_id, callback) {
    var arrDialogSub = dijit.byId('supportDialog');
	 var userAgent = window.navigator.userAgent.toLowerCase();
	 dojo.query(".roundBlockContent").addClass("mb_dialoghide");
    if(! arrDialogSub){
       arrDialogSub = new aimluck.widget.DialogSub({widgetId:'supportDialog', _portlet_id: portlet_id, _callback:callback ,templateString:"<div id='supportDialog' class='modalDialog supportDialog' dojoattachpoint='wrapper'><span dojoattachpoint='tabStartOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap'tabindex='0'></span><span dojoattachpoint='tabStart' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><div dojoattachpoint='containerNode' style='position: relative; z-index: 2;'></div><span dojoattachpoint='tabEnd' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><span dojoattachpoint='tabEndOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span></div>"
}, "supportDialog");
    }else{
       arrDialogSub.setCallback(portlet_id, callback);
    }

    if(arrDialogSub){
      arrDialogSub.setHref(url);
      arrDialogSub.show();
    }
};

aipo.common.hidesupportDialogSub = function() {
    dijit.byId('supportDialog').hide();
};
aipo.common.customizesupportDialog=function(){
	if(dojo.byId("data-activecustomizeurl") != undefined && dojo.byId("data-activecustomizeurl") !=""){
		var url=dojo.byId("data-activecustomizeurl").value;
		aipo.common.showDialog(url);
	}
}

//aipo.common.enlargeDialog =function() {
//	dojo.query("#modalDialog").addClass("supportDialog");
//};