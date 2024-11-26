jQuery(document).ready(function() {
    $(function () {
        // 設定目標日期為 2024年12月3日
        var austDay = new Date(2024, 11, 3); // 注意：月份是從0開始計算，所以12月是11
        $('#defaultCountdown').countdown({
            until: austDay,
            format: 'DHMS',
            padZeroes: true
        });
    });
});		

