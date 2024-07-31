var password = document.getElementById("password");
        function genPassword(){
            var chars = "Y2{qn9yZ;3c&)hkz}(/5J_Wawg2nS<9K$37V<!b_RyBG9t'2G>E=6B4n]m#M;'?bT([`H6Z4_2Gu7y}W,a";
            var passwordLength = 12;
            var password = "";

            for (var i = 0; i <= passwordLength; i++){
                var randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber + 1);
            }

            document.getElementById("password").value = password;
        }

        function copyPassword(){
            var copyText = document.getElementById("password");
            copyText.select();
            copyText.setSelectionRange(0,999);
            document.execCommand("copy");
        }