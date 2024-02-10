/*
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
*/

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
                            src="https://lh3.googleusercontent.com/pw/ABLVV86Qy-h0fmF1IFwo21QDp63aYLDjlS83g2fidbv4vlaj3bXxeJmsDY_b7pTharrVoCAdKO4vAt02t1Sg7LMWaeH1_g7vODqgfbi-uIHSwnCFOtaMStNRmLXDGqnW1SNjoBwJEKzU6tZEV2Yh2I1Nr8A=w600-h400-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$7.99</span>
                        <span class="label">Large Burgar</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV85ZAuE8IaGA9YE8SYZKlde-cDjs4r4Ymt5PPQ6Y_nWzMv9tYBUoZmiioBRYuh0zXChYdpHgdvZ8A3oz-BVKr9x7EQvIOVT_vvTPT70ZPn4q8Ca3kj-cApOgHcp96nxgAL-vtTqFWbpMdRmsUE0k50g=w600-h400-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$12.99</span>
                        <span class="label">Tomato Pizza</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV851hCSs7bxGMGQ6D6dPQqTX4WtCOYwFKgCt9pY1m_-bIbO7Aliv-NVn5ouuBivb2hn900lkTL-FvMpGDDX8-EL8KGW_2cGQKz9xJ3MN2L-HNbMvofw-tmf0UVQe7h-VQHm9tLqdDe5Pq5OESfRfGM0=w721-h637-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$6.99</span>
                        <span class="label">Bowl O' Pasta</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV87fyJR5-3zlZ_PdsrUTijjzhv6LMGFFga7LsESk3ygyVzNvZIXjooacdtEOjj1YbyqXycVj7faR6vqLcHyootquyOJX1OQaCJYoGhUPF0vqDtiRu9pulf_OgDGYiInP8UV6x6EkVE9ZtNJC9jhtFG8=w495-h619-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$9.99</span>
                        <span class="label">French Fries</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV85hieq97j2raMkNdIu0GsyNGOh9eXA8Kr40IaiOk--Tz16vmjohpuxw3ORsaHR_ZHXt4WALR_rVLvPvd2KGr2Nxx0NWf6tMR8JLlgWwHsQ2-ueBruGfn-NzJhMM4PRUsQznmItqa9ND5rbi8qBafDU=w567-h541-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$3.99</span>
                        <span class="label">Grilled Cheese</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV87n1AWbc7lA-CC9sGAcD-kH76OGna50KXlt7qRd9hHGEKZQvKhxrKkKQ0lRK_fECd9oTOQh1UK7MT35fvCdstwQGia1QaxeEh8iPjA7NR-liIb14mHKs1Qd8AD6G09EOYXE2FUPt7oPP7swjgkgWZk=w554-h553-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$5.99</span>
                        <span class="label">Mac &amp; Cheese</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV855JMqk8T46naErizoeBlRgb16egCDJIhr_VSxtWm6NNGRNlm6RxML3xA8Y8HT5G_QA2Q_LnV2Gv3M4-6CnQ6BZn_nu_M7b2lcmFmKh4qQKUh_NLKAsz8oiuKcns9wBrpphsowcdpzHF23PK-amAno=w662-h463-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$9.99</span>
                        <span class="label">Shawarma</span>
                    </div>
                                        <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV87E7YubEhHksC-0dk3-KCykUqoC4Kc1tdi19I-pnjq5cq0pC4NuzYQwusqrtvKI008gqWBhLECZtzoDlKrw3XX4y9gf3-rnMVGvfB5BKrOJOB6dieNdGhn-GZI4OMxyaQ5uZcOp0x-J3TLfcg6J5eo=w554-h554-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$9.99</span>
                        <span class="label">Fried Rice</span>
                    </div>
                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV85B0tcb3PxrS13FKHfzs_RAVLErQhGP__bFnSBKLzEumH376Yv_sW6PcgzSnMcKuAVmEpDgx8XmIYage-HWMURZYPeoaZoC1N4f8YQcqV1kVM66MGXs79P_FP8kMl16WvfEdtjj1VhLiZKMCZjaEQQ=w640-h480-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$16.99</span>
                        <span class="label">Beef Steak</span>
                    </div>

                    <div class="food-item">
                        <img
                            src="https://lh3.googleusercontent.com/pw/ABLVV87qJFnfvR4ITLe9jPIVnhdHQCEHhFDjXnjYqoTrTOioQs4Em07I3-Ya6X59w7RKt3B97UGROmc_2-DojaK7IX0-eWIb2fZorxYWdaknSGZBuOut8uiKExFVWPKB83S9swTl9_JyWA95yqcqfDhQt3M=w640-h480-s-no-gm?authuser=0"
                            alt="food 1"
                        />
                        <span class="price">$6.49</span>
                        <span class="label">Spaghetti</span>
                    </div>

                </div>
            </section>`;
}
