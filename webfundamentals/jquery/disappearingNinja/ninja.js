
         <script>
        var htmlString = "";
        for (var i = 0; i < 8; i ++){
            htmlString += '<img src="css/pics/ninja.jpg" alt="ninja">'
        }
        htmlString += '<input type="button" value="Restore" id="restore" class="restore">'
        $(document).ready(function(){
            $('.container').append(htmlString)

            $('img').click(function(){
                $(this).hide();
            });

            $('#restore').click(function(){
                $('img').show();
            });
        });
    </script>