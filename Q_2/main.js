let result
$(document).ready(function () {
    let info_1
    let info_2
    $.ajax(
        {
            type: "GET",
            url: "https://reqres.in/api/users?page=1",
            success: function (rec) {
                info_1 = rec.data
                $.ajax(
                    {
                        type: "GET",
                        url: "https://reqres.in/api/users?page=2",
                        success: function (rec) {
                            info_2 = rec.data
                            result = mergeInfo(info_1,info_2)
                            showInfo()
                        }
                    }
                )
            }
        }
    )

})

