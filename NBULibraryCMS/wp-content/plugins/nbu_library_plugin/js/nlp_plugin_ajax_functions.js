/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function ($) {
    $('#npl_new_form_submit').click(function(){
        var npl_plugin_name_of_category = $('.npl_plugin_name_of_category').val();
        
        var data1 = {
                'action': 'npl_new_hall_submit',
                'npl_plugin_name_of_category':npl_plugin_name_of_category,
                
            };
            $.post(nlp_ajax.ajaxurl, data1, function (response) {
                var response_cleaned = response.slice(0, -1);
               
                $('.nlp_create_hall_wrapper').append(response_cleaned);
            });
    });
    $('#nlp_add_end_time_for_post').click(function(){
        var npl_meta_data_for_end_time = $('.nlp_html_for_meta_box_end_time').val();
        var npl_meta_data_post_id = $('.nlp_html_for_meta_box_end_time').attr('id').split("_");
        var npl_split_id = npl_meta_data_post_id[1];
          var data2 = {
                'action': 'nlp_update_post_end_time',
                'nlp_post_variable_send':npl_meta_data_for_end_time,
                'nlp_post_variable_id': npl_split_id,
                
            };
            $.post(nlp_ajax.ajaxurl, data2, function (response) {
                var response_cleaned = response.slice(0, -1);
                $('.nlp_responce_of_made_actiona').html(response_cleaned);
            });
        
    });

    $(document).on("change",'#nlp_select_hall',function(){
        var value_of_chosen = $('#nlp_select_hall').find(":selected").val();
         var data3 = {
                'action': 'nlp_ajax_setter_for_reservation',
                'nlp_value_integer_send':value_of_chosen,
                
            };
            $.post(nlp_ajax.ajaxurl, data3, function (response) {
                var response_cleaned = response.slice(0, -1);
               $('.nlp_returned_data').html(response_cleaned);
            });
    
    });
    $(document).on('change','#nlp_month',function(){
        var value_of_chose = $('#nlp_month').find(":selected").val();
        var value_of_chosen_year = $('#nlp_year').find(':selected').val();
         var data4 = {
                'action': 'nlp_day_of_month',
                'nlp_value_integer_month':value_of_chose,
                'nlp_value_integer_year':value_of_chosen_year,
                
            };
            $.post(nlp_ajax.ajaxurl, data4, function (response) {
                var response_cleaned = response.slice(0, -1);
                $('.nlp_days_of_month').html(response_cleaned);
            });
        
    });
    $(document).on('change','#nlp_year',function(){
        var value_of_chose = $('#nlp_month').find(":selected").val();
        var value_of_chosen_year = $('#nlp_year').find(':selected').val();
         var data4 = {
                'action': 'nlp_day_of_month',
                'nlp_value_integer_month':value_of_chose,
                'nlp_value_integer_year':value_of_chosen_year,
                
            };
            $.post(nlp_ajax.ajaxurl, data4, function (response) {
                var response_cleaned = response.slice(0, -1);
                $('.nlp_days_of_month').html(response_cleaned);
            });
        
    });
    $(document).on('change','#nlp_selected_day',function(){
          var value_of_chosen_month = $('#nlp_month').find(":selected").val();
        var value_of_chosen_year = $('#nlp_year').find(':selected').val();
        var value_of_chose_day = $('#nlp_selected_day').find(":selected").val();
         var value_of_chosen_hall = $('#nlp_select_hall').find(":selected").val();
         var data5 = {
                'action': 'nlp_day_ajax_reservate_post',
                'nlp_value_integer_month':value_of_chosen_month,
                'nlp_value_integer_day':value_of_chose_day,
                'nlp_value_integer_year':value_of_chosen_year,
                'value_of_chosen_hall': value_of_chosen_hall,
                
            };
            $.post(nlp_ajax.ajaxurl, data5, function (response) {
                var response_cleaned = response.slice(0, -1);
                $('.nlp_taken_hours_for_day').html(response_cleaned);
            });
        
    });
});