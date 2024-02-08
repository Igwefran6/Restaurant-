export default function info() {
  return `<section class="text-align-center welcome-msg">
                <h2 class="opacity-80">
                    You can easily
                    <span class="block curly-text large-text opacity-100"
                        >Reach Us</span
                    >
                </h2>
                <div class="padding-10 small-text">— Our contact infos —</div>
                <section class="info">
                  <div class="contacts">
                    <p class="underline-text">To Make a reservation, call:</p>
                    <p class="bold">
                      +1 555 555 555 <br />
                      +1 777 777 777
                      </p>
                    <p class="underline-text">Or via email:</p>
                    <p class="bold">example@example.com</p>
                    <p class="underline-text">Or fill the form below</p>
                    <form action="#" method="post" accept-charset="utf-8">
<fieldset>
        <legend class="bold">Form</legend>
        <label for="fname">First Name:</label><br>
        <input type="text" id="fname" name="fname" required><br>
        <label for="lname">Last Name:</label><br>
        <input type="text" id="lname" name="lname" required><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="24" required></textarea><br>
        <input id="submit" class="bold underline-text" type="submit" value="Submit">
    </fieldset>
                    </form>
                    <hr />
                  </div>
                </section>
                <section>
                  <div class="visit">
                    <p class="underline-text">To visit us, our address is:</p>
                    <p class="bold">No. 6 Brooklyn Avenue, NY</p>
                    <p class="underline-text">A  map is provided below</p>
                  </div>
                </section>
            </section>`
}