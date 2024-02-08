import "../../assets/images/foods/burger.png";
import "../../assets/images/foods/pizza.png";
import "../../assets/images/foods/french-fries.png";
import "../../assets/images/foods/fried-rice.png";
import "../../assets/images/foods/grilled-cheese.png";
import "../../assets/images/foods/mac-and-cheese.png";
import "../../assets/images/foods/chicken-and-bacon-pasta.png";
import "../../assets/images/foods/shawarma.png";
import "../../assets/images/foods/spaghetti.png";
import "../../assets/images/foods/steak.png";
import "../../assets/images/foods/tacos.png";

export default function menu() {
    return `
  <section class="text-align-center welcome-msg">
                <h2 class="opacity-80">
                    What would you
                    <span class="block curly-text large-text opacity-100"
                        >Like to have?</span
                    >
                </h2>
                <div class="padding-10 small-text">— Our delish menu —</div>
            </section>
            <section class="menu-page">
                <div class="grid">
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/burger.png"
                            alt="food 1"
                        />
                        <span class="price">$7.99</span>
                        <span class="label">Large Burgar</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/pizza.png"
                            alt="food 1"
                        />
                        <span class="price">$12.99</span>
                        <span class="label">Tomato Pizza</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/chicken-and-bacon-pasta.png"
                            alt="food 1"
                        />
                        <span class="price">$6.99</span>
                        <span class="label">Bowl O' Pasta</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/french-fries.png"
                            alt="food 1"
                        />
                        <span class="price">$9.99</span>
                        <span class="label">French Fries</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/grilled-cheese.png"
                            alt="food 1"
                        />
                        <span class="price">$3.99</span>
                        <span class="label">Grilled Cheese</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/mac-and-cheese.png"
                            alt="food 1"
                        />
                        <span class="price">$5.99</span>
                        <span class="label">Mac &amp; Cheese</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/shawarma.png"
                            alt="food 1"
                        />
                        <span class="price">$9.99</span>
                        <span class="label">Shawarma</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/fried-rice.png"
                            alt="food 1"
                        />
                        <span class="price">$7.99</span>
                        <span class="label">Fried Rice</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/steak.png"
                            alt="food 1"
                        />
                        <span class="price">$16.99</span>
                        <span class="label">Beef Steak</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="../assets/images/foods/spaghetti.png"
                            alt="food 1"
                        />
                        <span class="price">$6.49</span>
                        <span class="label">Spaghetti</span>
                    </div>

                </div>
            </section>`;
}
