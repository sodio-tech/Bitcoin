var tableMan = angular.module("tableApp", []);

// app.factory("SharedObject", function () {
//     return {
//         recordsCount: 0,
//         editItemNumber: 0,
//         pageNum: 1,
//         insertMode: false,
//         reset: function () {
//             //this.recordsCount=0;
//             this.editItemNumber = 0;
//             this.pageNum = 1;
//             this.insertMode = false;
//         }
//     };
// });
// angular.module('initFromForm', [])
//     .directive("initFromForm", function ($parse) {
//         return {
//             link: function (scope, element, attrs) {
//                 var attr = attrs.initFromForm || attrs.ngModel || element.attrs('name'),
//                     val = attrs.value;
//                 $parse(attr).assign(scope, val)
//             }
//         };
//     });


// app.filter('paging', ["SharedObject", function (SharedObject) {
//     return function (input, pSize) {
//         SharedObject.recordsCount = (input && input.length) ? input.length : 0;
//         if (input) {
//             var size = parseInt(pSize, 10),
//                 pageNum = SharedObject.pageNum;
//             if (input.length <= size)
//                 return input;
//             var classes = [];
//             for (var i = 0; i < input.length; i++) {
//                 if (i < size * (pageNum - 1)) continue;
//                 if (i >= size * (pageNum - 1) + size) break;
//                 else classes.push(input[i]);
//             }
//             return classes;
//         } else return null;
//     }
// }]);


tableMan.factory('tableFactory', function ($http, $window) {

    return {
        getTransactions: function (id) {
            baseAddress = "http://localhost:5000/"
            url = baseAddress + "GetTransactions/" + id;
            return $http.get(url);

        }

    }

})

tableMan.controller("tableCtrl", function ($scope, tableFactory) {
    $scope.tabledata = [{
            'BlockHeight': '516612',
            'Time': '2018-04-04 16:11:18',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.67082850',
            'Status': '12/120',
            'Duration': '26m 1s ',
            'Luck': '309.61%',
            'Hashrate': '3412.19 PH/s',
            'TotalShares': '1,240,156,252,352'
        },
        {
            'BlockHeight': '518430',
            'Time': '2018-04-16 5:52:52',
            'BlockHash': '0000000000000000000482ffd0a6690df0364726c86ea19ed370ce406c06f95b',
            'Value': '12.6708285',
            'Status': '13/120',
            'Duration': '26m 1s',
            'Luck': '309.61%',
            'Hashrate': '3412.19 PH/s',
            'TotalShares': '1,240,156,252,352'
        },
        {
            'BlockHeight': '518426',
            'Time': '2018-04-16 5:26:51',
            'BlockHash': '0000000000000000000482ffd0a6690df0364726c86ea19ed370ce406c06f95b',
            'Value': '12.52336792',
            'Status': '17/120',
            'Duration': '34m 4s',
            'Luck': '168.98%',
            'Hashrate': '4773.46 PH/s',
            'TotalShares': '2,271,717,678,021'
        },
        {
            'BlockHeight': '518421',
            'Time': '2018-04-16 4:52:47',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.52047891',
            'Status': '22/120',
            'Duration': '1h 36m 31s ',
            'Luck': '68.16%',
            'Hashrate': '4178.23 PH/s',
            'TotalShares': '5,633,598,463,248'
        },
        {
            'BlockHeight': '518412',
            'Time': '2018-04-16 3:16:16',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.54910482',
            'Status': '31/120',
            'Duration': '2h 29s',
            'Luck': '55.10%',
            'Hashrate': '4140.03 PH/s',
            'TotalShares': '6,968,216,612,994'
        },

        {

            'BlockHeight': '518403',
            'Time': '2018-04-16 1:15:47',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.60505881',
            'Status': '40/120',
            'Duration': '51m 42s ',
            'Luck': '133.24%',
            'Hashrate': '3989.37 PH/s',
            'TotalShares': '2,881,288,461,884'
        },

        {
            'BlockHeight': '518395',
            'Time': '2018-04-16 0:24:05',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.54466851',
            'Status': '48/120',
            'Duration': '33m 38s',
            'Luck': '174.18%',
            'Hashrate': '4691.48 PH/s',
            'TotalShares': '2,204,303,974,963'
        },

        {

            'BlockHeight': '516612',
            'Time': '2018-04-04 16:11:18',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.67082850',
            'Status': '12/120',
            'Duration': '26m 1s ',
            'Luck': '309.61%',
            'Hashrate': '3412.19 PH/s',
            'TotalShares': '1,240,156,252,352'
        },

        {
            'BlockHeight': '518390',
            'Time': '2018-04-15 23:50:27',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.73704162',
            'Status': '53/120',
            'Duration': '4h 7m 16s',
            'Luck': '26.38%',
            'Hashrate': '4214.37 PH/s',
            'TotalShares': '14,557,610,546,276'
        },

        {
            'BlockHeight': '518367',
            'Time': '2018-04-15 19:43:11',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.56831022',
            'Status': '76/120',
            'Duration': '1h 16m 12s',
            'Luck': '88.80%',
            'Hashrate': '4061.35 PH/s',
            'TotalShares': '4,323,317,129,464'
        },

        {
            'BlockHeight': '518359',
            'Time': '2018-04-15 18:26:59',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.69151674',
            'Status': '84/120',
            'Duration': '28m 27s',
            'Luck': '182.19%',
            'Hashrate': '5301.75 PH/s',
            'TotalShares': '2,107,136,026,779'
        },
        {
            'BlockHeight': '518354',
            'Time': '2018-04-15 17:58:32',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.55944663',
            'Status': '89/120',
            'Duration': '3m 32s',
            'Luck': '2750.47%',
            'Hashrate': '2828.09 PH/s',
            'TotalShares': '139,594,843,452'
        },
        {
            'BlockHeight': '518353',
            'Time': '2018-04-15 17:55:00',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.55293739',
            'Status': '90/120',
            'Duration': '1h 37m 20s',
            'Luck': '69.71%',
            'Hashrate': '4050.89 PH/s',
            'TotalShares': '5,508,119,251,584'
        },
        {
            'BlockHeight': '518341',
            'Time': '2018-04-15 16:17:40',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.67896291',
            'Status': '102/120',
            'Duration': '53m 36s',
            'Luck': '127.27%',
            'Hashrate': '4028.56 PH/s',
            'TotalShares': '3,016,516,253,212'
        },
        {
            'BlockHeight': '518335',
            'Time': '2018-04-15 15:24:04',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.89787129',
            'Status': '108/120',
            'Duration': '18m 38s',
            'Luck': '231.40%',
            'Hashrate': '6374.26 PH/s',
            'TotalShares': '1,659,249,170,142'
        },
        {
            'BlockHeight': '518334',
            'Time': '2018-04-15 15:05:26',
            'BlockHash': '000000000000000000215ade6b51d480443124782ea598c60ca020c4cb6ebba9',
            'Value': '12.68787724',
            'Status': '109/120',
            'Duration': '8m 28s',
            'Luck': '1173.62%',
            'Hashrate': '2765.89 PH/s',
            'TotalShares': '327,143,853,908'
        },
    ];

    console.log("$scope.tabledata === ", $scope.tabledata);




    $scope.gettransactions = function (id) {
        console.log("id== ", id);
        $scope.inputsArray = [];


        tableFactory.getTransactions(id).success(function (list) {
            console.log("id === ", id);
            $scope.actualResponse = list;
            console.log("$scope.actualResponse == ", $scope.actualResponse);

            $scope.txsArray = $scope.actualResponse.txs;
            console.log("$scope.txsArray == ", $scope.txsArray);
            
            
            var len = $scope.txsArray.length;
            console.log("len==", len);

            for (var i = 0; i < len; i++) {

                $scope.inputsArray.push($scope.txsArray[i].inputs);

            }

            console.log("$scope.inputsArray == ", $scope.inputsArray);





            //           console.log("$scope.inputsArray.prev_out.addr == ",$scope.inputsArray[i].prev_out.addr);





            // $scope.inputsArray = $scope.txsArray.inputs;

            //console.log("$scope.inputsArray == ", $scope.inputsArray);


        }).error(function (list) {
            // $scope.error = "An Error has occured while Loading teacher! " + list.ExceptionMessage;
        });
    };


    //===================================================Pagination=================================================


    // $scope.TotalPages = function () {
    //     var size = parseInt($scope.pageSize, 10);
    //     if (size > $scope.localObject.recordsCount) return 1;
    //     else
    //         return $scope.localObject.recordsCount % size === 0 ?
    //             $scope.localObject.recordsCount / size :
    //             Math.floor($scope.localObject.recordsCount / size) + 1;
    // };
    // $scope.NavFirst = function () {
    //     var pageNum = $scope.localObject.pageNum;
    //     var paglst = $scope.localObject.recordsCount / $scope.pageSize;

    //     pageNum = $scope.localObject.recordsCount > ($scope.pageSize * pageNum) ? pageNum + (paglst - 1) : pageNum;

    //     if (pageNum > 1) {
    //         pageNum = pageNum > 2 ? 1 : pageNum - 1;

    //     }

    //     $scope.localObject.reset();
    //     $scope.localObject.pageNum = pageNum;
    // };

    // $scope.NavPrev = function () {
    //     var pageNum = $scope.localObject.pageNum;
    //     pageNum = pageNum < 2 ? 1 : pageNum - 1;
    //     $scope.localObject.reset();
    //     $scope.localObject.pageNum = pageNum;
    // };
    // $scope.NavNext = function () {
    //     var pageNum = $scope.localObject.pageNum;
    //     pageNum = $scope.localObject.recordsCount > ($scope.pageSize * pageNum) ? pageNum + 1 : pageNum;
    //     $scope.localObject.reset();
    //     $scope.localObject.pageNum = pageNum;
    // };

    // $scope.NavLast = function () {
    //     var pageNum = $scope.localObject.pageNum;
    //     var paglst = Math.round($scope.localObject.recordsCount / $scope.pageSize) - pageNum;
    //     pageNum = $scope.localObject.recordsCount > ($scope.pageSize * pageNum) ? pageNum + (paglst) : pageNum;
    //     $scope.localObject.reset();
    //     $scope.localObject.pageNum = pageNum;
    // };





});