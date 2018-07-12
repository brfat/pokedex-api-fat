 jQuery(document).ready(function () {
        $("img.result__pokemon").hide();
        $("a.btn__search").click(function (e) {
            $input = $("input.input__pokemon").val();
            e.preventDefault();

            $.ajax({
                url: "https://pokeapi.co/api/v2/pokemon-form/" + $input,
                dataType: 'json',
                crossDomain: true,
                contentType: "application/json",
                success: function (result) {
                    $(".wrapper__search").append('<p class="poke__name">' + result['name'] + '</p>');
                    $(".wallpaper").find('img.result__pokemon').attr('src', result['sprites'].front_default);
                    $("img.result__pokemon").show();
                    console.log($input);
                }
            });

        });
    });