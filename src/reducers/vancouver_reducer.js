import {PLACE_SELECTED, LIST_PLACES } from '../actions/types';

const places = [
		{name: 'Art Gallery',     pics: ["20170714_155900", "20170714_161939","20170714_162141","20170714_162215","20170714_162420"]},
		{name: 'bridal veil fall',pics: ["20161009_153323","20161009_153358"]},
		{name: 'canada place',    pics: ["20170502_124545", "20170502_124553","20170502_125641","20170502_134353","20170502_141518"]},	
		{name: 'granville island',pics: ["20170628_190555"]},
		{name: 'grouse mountain', pics: ["20170705_152155","20170705_142712","20170705_134214"]},
//		{name: 'Harrison Hot Springs',  pics: ["20161009_173225","20161009_162446","20161009_162450"]},
		{name: 'lookout', 				pics: ["20170714_145114","20170714_145117","20170714_145119","20170714_145218","20170714_145222"]},
		{name: 'Maritime Museum', 		pics: ["20161007_162222"]},
		{name: 'science museum', 		pics: ["20170628_145821","20170628_145908","20170628_145912"]},
		{name: 'sun yat-sen', 			pics: ["20170628_171257","20170628_171958","20170628_172146","20170628_172210","20170628_172406","20170628_172410","20170628_172423","20170628_172429","20170628_172702"]},
		{name: 'Suspension Bridge', 	pics: ["20170705_103052","20170705_103816","20170705_104151","20170705_104954","20170705_112705","20170705_113034","20170705_113037"]},
		{name: 'Terra Nova Rural park', 	pics: ["20170420_170837","20170420_172435","20170420_172440","20170420_172800","20170420_172806"]},
		{name: 'The George C. Bird Sanctuary', pics: ["20161106_161253","20161106_161316","20161106_161448"]},
		{name: 'vancouver museum', 		pics: ["20161007_170943"]}
				
];

const newPlaces = places.map((place,index) => {
				    	return {key: index, name:place.name, pics: place.pics.map(pic => {
				    		return `http://guarded-dolls.surge.sh/${place.name}/${pic}.jpg`
				    	})}
				    });



export default function(state = {},  action) {

  switch(action.type) {
    case 'PLACE_SELECTED':  return { ...state, selectedPlace: action.payload}; 
    
  }
  return { ...state, places: newPlaces}
}
