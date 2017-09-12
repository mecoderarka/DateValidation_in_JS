$('#ID').bind("change", function (e) {
 +                var node = $(this);
 +                var regex = /^\d{2}\/\d{2}\/\d{4}$/;
 +
 +                var inserted_mm = 0;
 +                var inserted_dd = 0;
 +                var inserted_year = 0;
 +
 +                var m_31 = false;
 +                var m_30 = false;
 +                var m_28 = false;
 +
 +                if (node.val().match(regex)) {
 +                    // alert(node.val());
 +                    // all the values are assigned to the variables
 +                    var d1 = $('#ID').val();
 +                    inserted_mm = d1.split("/", d1.length)[0];
 +                    inserted_dd = d1.split("/", d1.length)[1];
 +                    inserted_year = d1.split("/", d1.length)[2];
 +                    var startyear = baseDate.split("/", d1.length)[2];
 +                    var endyear = futureDate.split("/", d1.length)[2];
 +
 +                    // calcualtion regarding months
 +                    try {
 +                        if (containsMonths(inserted_mm, ["01", "03", "05", "07", "08", "10", "12"])) {
 +                            m_31 = true;
 +                            // alert('31');
 +                        }
 +                        else if (containsMonths(inserted_mm, ["04", "06", "09", "11"])) {
 +                            m_30 = true;
 +                            //alert('30');
 +                        }
 +                        else if (inserted_mm == "02") {
 +                            var m_28 = true;
 +                            // alert('28');
 +                        }
 +                        else {
 +                            //   alert('476');
 +                            $('#ModalId').modal({ backdrop: false });
 +                            $('#ErrorDiv').text("Check The Entered Date");
 +                            return;
 +                        }
 +                    }
 +                    catch (e) {
 +                        // alert('475');
 +                        $('#ModalId').modal({ backdrop: false });
 +                        $('#ErrorDiv').text("Enter the Date in dd/mm/yyyy format");
 +                        return;
 +                    }
 +                    // calcualtion regarding months ends here
 +
 +                    // according to month next calculation block
 +                    try {
 +                        if (m_31) {
 +                            if (inserted_dd > 31) {
 +                                //  alert('4');
 +                                $('#ModalId').modal({ backdrop: false });
 +                                $('#ErrorDiv').text("Check The Entered Date");
 +                                return;
 +                            }
 +                        }
 +                        else if (m_30) {
 +                            if (inserted_dd > 30) {
 +                                //   alert('5');
 +                                $('#ModalId').modal({ backdrop: false });
 +                                $('#ErrorDiv').text("Check The Entered Date");
 +                                return;
 +                            }
 +                        }
 +                        else if (m_28) {
 +                            // leap year calculation
 +                            if (((inserted_year % 4) == 0)) {
 +                                if ((inserted_dd > 29)) {
 +                                    //    alert('65');
 +                                    console.log("leap year entered");
 +                                    $('#ModalId').modal({ backdrop: false });
 +                                    $('#ErrorDiv').text("Check The Entered Date");
 +                                    return;
 +                                }
 +                            }
 +                            else if ((inserted_year % 4) != 0) {
 +                                if (inserted_dd > 28) {
 +                                    //    alert('6');
 +                                    console.log("no leap year entered");
 +                                    $('#ModalId').modal({ backdrop: false });
 +                                    $('#ErrorDiv').text("Check The Entered Date");
 +                                    return;
 +                                }
 +                            }
 +                            // leap year calculation ends here
 +                        }
 +                    }
 +                    catch (e) {
 +                        //  alert('8');
 +                        $('#ModalId').modal({ backdrop: false });
 +                        $('#ErrorDiv').text("Check The Entered Date");
 +                        return;
 +                    }
 +
 +                    //month calculation ends here
 +
 +                    // Year calcualtion
 +                    try {
 +                        if ((inserted_year < endyear)) {
 +                            $('#ModalId').modal({ backdrop: false });
 +                            console.log('end');
 +                            $('#ErrorDiv').text("Check The Entered Date");
 +                            return;
 +                        }
 +                        else if ((inserted_year > startyear)) {
 +                            $('#ModalId').modal({ backdrop: false });
 +                            console.log('begin');
 +                            $('#ErrorDiv').text("Check The Entered Date");
 +                            return;
 +                        }
 +                    }
 +                    catch (e) {
 +                        e.preventDefault();
 +                        $('#ModalId').modal({ backdrop: false });
 +                        //  alert('12');
 +                        $('#ErrorDiv').text("Invalid Date Entered");
 +                    }
 +                }
 +                    // Year wise calculation ends here
 +
 +                    // Invalid Date Entered
 +                else {
 +                    // console.log('asfre');
 +                    console.log('regex check');
 +                    $('#ModalId').modal({ backdrop: false });
 +                    $('#ErrorDiv').text("Enter Date in proper format");
 +                }
 +                // Invalid Date Entered ends here
 +            });
