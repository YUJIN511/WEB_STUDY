/**
 * MyMap 생성자로 사용될 함수를 구현
 */

function MyMap(){
	
	var map = {};
	var size =0;
	map.value = {};
	
	map.put = function(key, value){
		map.value[key] = value;
		size++;
	};
	
	map.contains = function(key){
		if(map.value[key]){
			return true;
		}
		else{
			return false;
		}
	};
	
	map.get = function(key){
		if(map.contains(key)){
			return map.value[key];
		}
		return undefined;
	};
	
	map.remove = function(key){
		if(map.contains(key)){
			map.value[key] = undefined;
		}
		size--;
	};
	
	map.size = function(){
		return size;
	};
	
	map.clear = function(){
		map.value={};
		size=0;
	};
	
	return map;
}
