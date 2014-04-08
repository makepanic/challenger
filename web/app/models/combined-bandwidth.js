import ajax from 'appkit/utils/ajax';
import Util from 'appkit/utils/globe-util';

function useAll(){
    return new Em.RSVP.Promise(function(resolve, reject){
        var url = ENV.BASE_URL + 'combined-bandwidth/all';
        // TODO: replace with api call
        url = ENV.BASE_URL + 'combined-bandwidth.json';
        ajax({
            dataType: 'json',
            url: url
        }).then(function(result){
            resolve(Util.processHistoryResponse({
                readHistory: 'read_history',
                writeHistory: 'write_history'
            }, result));
        });
    });
}

var CombinedUptime = {
    useAll: useAll
};
export default CombinedUptime;