<?php
    add_action('wp_enqueue_scripts', 'nlp_plugin_admin_refresher_admin_js_loader');

    function nlp_plugin_admin_refresher_admin_js_loader() {

        wp_register_script('nlp_plugin-admin-js', plugins_url('/nlp_plugin_admin_refresher/js/nlp_plugin_admin_js.js'), array('jquery'));
        wp_enqueue_script('nlp_plugin-admin-js');
    }

    function nlp_plugin_admin_refresher_style_loader() {
        //Admin style for the admin page
        wp_register_style('nlp_plugin-css', plugins_url('/nlp_plugin_admin_refresher/css/nlp_plugin_css.css'));

        wp_enqueue_style('nlp_plugin-css');
    }

    

    add_action('wp_enqueue_scripts', 'nlp_plugin_admin_refresher_style_loader');
 