/* eslint-disable max-len, quotes, comma-spacing, key-spacing, quote-props */
// Request: facets {"q":"harry","pretty":true}
'use strict';
import Provider from '../../provider/Provider.js';
import {assert, fail} from 'chai';

let context = {"services":{"ddbcmsapi":"http://rest.filmstriben.dbc.inlead.dk/web/","moreinfo":"http://moreinfo.addi.dk/2.6/","openagency":"http://openagency.addi.dk/2.24/","openholdingstatus":"https://openholdingstatus.addi.dk/2.2/","openorder":"https://openorder.addi.dk/2.7.1/","TESTopenorder":"https://openorder.addi.dk/test_2.7.1/","opensearch":"http://opensearch.addi.dk/b3.0_4.2/","openuserstatus":"https://openuserstatus.addi.dk/1.4.1/","rank":"https://xptest.dbc.dk/ms/rank/v1","suggestpopular":"http://xptest.dbc.dk/ms/entity-pop/v1","suggestcreator":"http://xptest.dbc.dk/ms/entity-suggest/v1/creator","suggestlibrary":"http://xptest.dbc.dk/ms/entity-suggest/v1/library","suggestsubject":"http://xptest.dbc.dk/ms/entity-suggest/v1/subject","recommendurls":{"default":"https://xptest.dbc.dk/ms/recommend-cosim/v1","popular":"https://xptest.dbc.dk/ms/recommend-pop/v1"}},"search":{"agency":"775100","profile":"opac","collectionidentifiers":"rec.collectionIdentifier:150013-palle OR rec.collectionIdentifier:758000-katalog"},"netpunkt":{"user":"XXXXX","group":"XXXXX","password":"XXXXX"},"user":{"agency":"775100","id":"XXXXX","pin":"XXXXX","salt":"XXXXX"},"app":{"clientid":"XXXXX","ddbcmsapipassword":"XXXXX","orderpolicyrequester":"190101"}};
let provider = Provider();
let mockData = {"[\"opensearch\",\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\"\\n    xmlns:open=\\\"http://oss.dbc.dk/ns/opensearch\\\">\\n  <SOAP-ENV:Body>\\n    <open:searchRequest>\\n      <open:query>harry</open:query>\\n      <open:agency>775100</open:agency>\\n      <open:profile>opac</open:profile>\\n      <open:facets>\\n        <open:numberOfTerms>10</open:numberOfTerms>\\n        <open:facetSort>count</open:facetSort>\\n        <open:facetMinCount>1</open:facetMinCount>\\n        <open:facetName>facet.creator</open:facetName>\\n        <open:facetName>facet.subject</open:facetName>\\n        <open:facetName>facet.language</open:facetName>\\n        <open:facetName>facet.date</open:facetName>\\n        <open:facetName>facet.form</open:facetName>\\n      </open:facets>\\n      <open:start>1</open:start>\\n      <open:stepValue>0</open:stepValue>\\n      <open:outputType>json</open:outputType>\\n    </open:searchRequest>\\n  </SOAP-ENV:Body>\\n</SOAP-ENV:Envelope>\"]":"{\"searchResponse\":{\"result\":{\"hitCount\":{\"$\":\"1732\"},\"collectionCount\":{\"$\":\"0\"},\"more\":{\"$\":\"true\"},\"facetResult\":{\"facet\":[{\"facetName\":{\"$\":\"facet.creator\"},\"facetTerm\":[{\"frequence\":{\"$\":\"112\"},\"term\":{\"$\":\"joanne k. rowling\"}},{\"frequence\":{\"$\":\"61\"},\"term\":{\"$\":\"jo nesb\\u00f8\"}},{\"frequence\":{\"$\":\"44\"},\"term\":{\"$\":\"michael connelly\"}},{\"frequence\":{\"$\":\"37\"},\"term\":{\"$\":\"harry christophers\"}},{\"frequence\":{\"$\":\"34\"},\"term\":{\"$\":\"the sixteen\"}},{\"frequence\":{\"$\":\"29\"},\"term\":{\"$\":\"harry edison\"}},{\"frequence\":{\"$\":\"27\"},\"term\":{\"$\":\"georg friedrich h\\u00e4ndel\"}},{\"frequence\":{\"$\":\"26\"},\"term\":{\"$\":\"allan hilton andersen\"}},{\"frequence\":{\"$\":\"25\"},\"term\":{\"$\":\"bent otto hansen\"}},{\"frequence\":{\"$\":\"23\"},\"term\":{\"$\":\"harry nilsson\"}}]},{\"facetName\":{\"$\":\"facet.subject\"},\"facetTerm\":[{\"frequence\":{\"$\":\"469\"},\"term\":{\"$\":\"vokal\"}},{\"frequence\":{\"$\":\"376\"},\"term\":{\"$\":\"usa\"}},{\"frequence\":{\"$\":\"203\"},\"term\":{\"$\":\"rock\"}},{\"frequence\":{\"$\":\"202\"},\"term\":{\"$\":\"england\"}},{\"frequence\":{\"$\":\"193\"},\"term\":{\"$\":\"instrumental\"}},{\"frequence\":{\"$\":\"152\"},\"term\":{\"$\":\"2000-2009\"}},{\"frequence\":{\"$\":\"152\"},\"term\":{\"$\":\"danmark\"}},{\"frequence\":{\"$\":\"134\"},\"term\":{\"$\":\"jazz\"}},{\"frequence\":{\"$\":\"130\"},\"term\":{\"$\":\"1960-1969\"}},{\"frequence\":{\"$\":\"129\"},\"term\":{\"$\":\"krimi\"}}]},{\"facetName\":{\"$\":\"facet.language\"},\"facetTerm\":[{\"frequence\":{\"$\":\"680\"},\"term\":{\"$\":\"engelsk\"}},{\"frequence\":{\"$\":\"589\"},\"term\":{\"$\":\"dansk\"}},{\"frequence\":{\"$\":\"189\"},\"term\":{\"$\":\"blandede sprog\"}},{\"frequence\":{\"$\":\"17\"},\"term\":{\"$\":\"latin\"}},{\"frequence\":{\"$\":\"12\"},\"term\":{\"$\":\"tysk\"}},{\"frequence\":{\"$\":\"10\"},\"term\":{\"$\":\"italiensk\"}},{\"frequence\":{\"$\":\"8\"},\"term\":{\"$\":\"russisk\"}},{\"frequence\":{\"$\":\"7\"},\"term\":{\"$\":\"fransk\"}},{\"frequence\":{\"$\":\"7\"},\"term\":{\"$\":\"svensk\"}},{\"frequence\":{\"$\":\"6\"},\"term\":{\"$\":\"norsk\"}}]},{\"facetName\":{\"$\":\"facet.date\"},\"facetTerm\":[{\"frequence\":{\"$\":\"108\"},\"term\":{\"$\":\"2012\"}},{\"frequence\":{\"$\":\"101\"},\"term\":{\"$\":\"2013\"}},{\"frequence\":{\"$\":\"97\"},\"term\":{\"$\":\"2009\"}},{\"frequence\":{\"$\":\"96\"},\"term\":{\"$\":\"2015\"}},{\"frequence\":{\"$\":\"95\"},\"term\":{\"$\":\"2011\"}},{\"frequence\":{\"$\":\"93\"},\"term\":{\"$\":\"2007\"}},{\"frequence\":{\"$\":\"81\"},\"term\":{\"$\":\"2014\"}},{\"frequence\":{\"$\":\"80\"},\"term\":{\"$\":\"2006\"}},{\"frequence\":{\"$\":\"78\"},\"term\":{\"$\":\"2005\"}},{\"frequence\":{\"$\":\"76\"},\"term\":{\"$\":\"2004\"}}]},{\"facetName\":{\"$\":\"facet.form\"},\"facetTerm\":[{\"frequence\":{\"$\":\"40\"},\"term\":{\"$\":\"amerikanske film\"}},{\"frequence\":{\"$\":\"32\"},\"term\":{\"$\":\"soundtracks\"}},{\"frequence\":{\"$\":\"30\"},\"term\":{\"$\":\"computerspil\"}},{\"frequence\":{\"$\":\"27\"},\"term\":{\"$\":\"biografier\"}},{\"frequence\":{\"$\":\"20\"},\"term\":{\"$\":\"actionspil\"}},{\"frequence\":{\"$\":\"15\"},\"term\":{\"$\":\"adventurespil\"}},{\"frequence\":{\"$\":\"13\"},\"term\":{\"$\":\"engelske film\"}},{\"frequence\":{\"$\":\"11\"},\"term\":{\"$\":\"undervisningsmaterialer\"}},{\"frequence\":{\"$\":\"8\"},\"term\":{\"$\":\"erindringer\"}},{\"frequence\":{\"$\":\"8\"},\"term\":{\"$\":\"h\\u00e5ndb\\u00f8ger\"}}]}]},\"statInfo\":{\"fedoraRecordsCached\":{\"$\":\"0\"},\"fedoraRecordsRead\":{\"$\":\"0\"},\"time\":{\"$\":\"0.111699\"},\"trackingId\":{\"$\":\"2016-05-30T20:46:56:193031:24672\"}}}},\"@namespaces\":{\"ac\":\"http:\\/\\/biblstandard.dk\\/ac\\/namespace\\/\",\"dbcaddi\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcaddi#\",\"dbcbib\":\"http:\\/\\/oss.dbc.dk\\/rdf\\/dbcbib#\",\"dc\":\"http:\\/\\/purl.org\\/dc\\/elements\\/1.1\\/\",\"dcmitype\":\"http:\\/\\/purl.org\\/dc\\/dcmitype\\/\",\"dcterms\":\"http:\\/\\/purl.org\\/dc\\/terms\\/\",\"dkabm\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkabm\\/\",\"dkdcplus\":\"http:\\/\\/biblstandard.dk\\/abm\\/namespace\\/dkdcplus\\/\",\"docbook\":\"http:\\/\\/docbook.org\\/ns\\/docbook\",\"kml\":\"http:\\/\\/www.opengis.net\\/kml\\/2.2\",\"marcx\":\"info:lc\\/xmlns\\/marcxchange-v1\",\"mx\":\"http:\\/\\/www.loc.gov\\/MARC21\\/slim\",\"of\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformat\",\"ofo\":\"http:\\/\\/oss.dbc.dk\\/ns\\/openformatoutput\",\"os\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearch\",\"oso\":\"http:\\/\\/oss.dbc.dk\\/ns\\/opensearchobjects\",\"oss\":\"http:\\/\\/oss.dbc.dk\\/ns\\/osstypes\",\"xs\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema\",\"xsi\":\"http:\\/\\/www.w3.org\\/2001\\/XMLSchema-instance\"}}"};

describe('Automated test: facets_simple', () => {
  it('expected response. ID:8iuwzo, for {"q":"harry","pretty":true}', (done) => {
    context.mockData = mockData;
    provider.execute('facets', {"q":"harry","pretty":true}, context)
      .then(result => {
        assert.deepEqual(result,
            {"statusCode":200,"data":{"creator":[{"term":"joanne k. rowling","frequency":112},{"term":"jo nesbø","frequency":61},{"term":"michael connelly","frequency":44},{"term":"harry christophers","frequency":37},{"term":"the sixteen","frequency":34},{"term":"harry edison","frequency":29},{"term":"georg friedrich händel","frequency":27},{"term":"allan hilton andersen","frequency":26},{"term":"bent otto hansen","frequency":25},{"term":"harry nilsson","frequency":23}],"subject":[{"term":"vokal","frequency":469},{"term":"usa","frequency":376},{"term":"rock","frequency":203},{"term":"england","frequency":202},{"term":"instrumental","frequency":193},{"term":"2000-2009","frequency":152},{"term":"danmark","frequency":152},{"term":"jazz","frequency":134},{"term":"1960-1969","frequency":130},{"term":"krimi","frequency":129}],"language":[{"term":"engelsk","frequency":680},{"term":"dansk","frequency":589},{"term":"blandede sprog","frequency":189},{"term":"latin","frequency":17},{"term":"tysk","frequency":12},{"term":"italiensk","frequency":10},{"term":"russisk","frequency":8},{"term":"fransk","frequency":7},{"term":"svensk","frequency":7},{"term":"norsk","frequency":6}],"date":[{"term":"2012","frequency":108},{"term":"2013","frequency":101},{"term":"2009","frequency":97},{"term":"2015","frequency":96},{"term":"2011","frequency":95},{"term":"2007","frequency":93},{"term":"2014","frequency":81},{"term":"2006","frequency":80},{"term":"2005","frequency":78},{"term":"2004","frequency":76}],"form":[{"term":"amerikanske film","frequency":40},{"term":"soundtracks","frequency":32},{"term":"computerspil","frequency":30},{"term":"biografier","frequency":27},{"term":"actionspil","frequency":20},{"term":"adventurespil","frequency":15},{"term":"engelske film","frequency":13},{"term":"undervisningsmaterialer","frequency":11},{"term":"erindringer","frequency":8},{"term":"håndbøger","frequency":8}]}});
        done();
      })
      .catch(result => {
        fail({throw: result}, {"statusCode":200,"data":{"creator":[{"term":"joanne k. rowling","frequency":112},{"term":"jo nesbø","frequency":61},{"term":"michael connelly","frequency":44},{"term":"harry christophers","frequency":37},{"term":"the sixteen","frequency":34},{"term":"harry edison","frequency":29},{"term":"georg friedrich händel","frequency":27},{"term":"allan hilton andersen","frequency":26},{"term":"bent otto hansen","frequency":25},{"term":"harry nilsson","frequency":23}],"subject":[{"term":"vokal","frequency":469},{"term":"usa","frequency":376},{"term":"rock","frequency":203},{"term":"england","frequency":202},{"term":"instrumental","frequency":193},{"term":"2000-2009","frequency":152},{"term":"danmark","frequency":152},{"term":"jazz","frequency":134},{"term":"1960-1969","frequency":130},{"term":"krimi","frequency":129}],"language":[{"term":"engelsk","frequency":680},{"term":"dansk","frequency":589},{"term":"blandede sprog","frequency":189},{"term":"latin","frequency":17},{"term":"tysk","frequency":12},{"term":"italiensk","frequency":10},{"term":"russisk","frequency":8},{"term":"fransk","frequency":7},{"term":"svensk","frequency":7},{"term":"norsk","frequency":6}],"date":[{"term":"2012","frequency":108},{"term":"2013","frequency":101},{"term":"2009","frequency":97},{"term":"2015","frequency":96},{"term":"2011","frequency":95},{"term":"2007","frequency":93},{"term":"2014","frequency":81},{"term":"2006","frequency":80},{"term":"2005","frequency":78},{"term":"2004","frequency":76}],"form":[{"term":"amerikanske film","frequency":40},{"term":"soundtracks","frequency":32},{"term":"computerspil","frequency":30},{"term":"biografier","frequency":27},{"term":"actionspil","frequency":20},{"term":"adventurespil","frequency":15},{"term":"engelske film","frequency":13},{"term":"undervisningsmaterialer","frequency":11},{"term":"erindringer","frequency":8},{"term":"håndbøger","frequency":8}]}});
        done();
      });
  });
});
