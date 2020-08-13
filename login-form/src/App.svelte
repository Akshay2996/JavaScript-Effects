<script>
  // JS Here

  const strengthText = ["⭕Null", "😔Bad", "🙂Ok", "😃Decent", "🎯Solid"];

  let strength = 0;
  let validations = [];
  let showPassword = false;

  function validatePassword(e) {
    let password = e.target.value;

    validations = [
      password.length > 5,
      password.search(/[A-Z]/) > -1,
      password.search(/[0-9]/) > -1,
      password.search(/[!@#$%^&*]/) > -1,
    ];

    strength = validations.reduce((acc, current) => acc + current, 0);
  }
</script>

<style>
  main {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  form {
    --text-color: #afafaf;
    width: 50vw;
    max-width: 500px;
  }

  .field {
    width: 100%;
    position: relative;
    border-bottom: 2px dashed var(--text-color);
    margin: 4rem auto 1rem;
    transition: border-color 500ms ease;
  }

  .label {
    color: var(--text-color);
    font-size: 1.2rem;
  }

  .input {
    border: none;
    outline: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }

  input:valid {
    color: yellowgreen;
  }

  input:invalid {
    color: orangered;
  }

  ul {
    list-style: none;
    margin: 10px 0;
    padding: 0;
  }

  /* Border Animation */

  .field::after {
    content: "";
    position: relative;
    display: block;
    height: 4px;
    width: 100%;
    background: #d16dff;
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 400ms ease;
    top: 2px;
  }

  .field:focus-within {
    border-color: transparent;
  }

  .field:focus-within::after {
    transform: scaleX(1);
  }

  /* Label Animation */
  .label {
    z-index: -1;
    position: absolute;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 500ms ease;
  }
  .field:focus-within .label,
  .input:not(:placeholder-shown) + .label {
    transform: scale(0.8) translateY(-5rem);
  }

  /* Strength Meter */
  .strength {
    display: flex;
    height: 20px;
    width: 100%;
  }

  .bar {
    margin-right: 5px;
    height: 100%;
    width: 25%;
    transition: box-shadow 500ms ease;
    box-shadow: inset 0 20px #1f1f1f;
  }

  .bar-show {
    box-shadow: none;
  }

  .bar-1 {
    background: linear-gradient(to right, red, orangered);
  }

  .bar-2 {
    background: linear-gradient(to right, orangered, yellow);
  }

  .bar-3 {
    background: linear-gradient(to right, yellow, yellowgreen);
  }

  .bar-4 {
    background: linear-gradient(to right, yellowgreen, green);
  }

  .bar:last-child {
    margin-right: 0;
  }

  .strength-text {
    margin-top: 15px;
  }

  /* Buttons */

  .toggle-password {
    position: absolute;
    cursor: pointer;
    right: 0.25rem;
    bottom: 0.5rem;
    font-size: 1.2rem;
  }
</style>

<!-- Html Here -->

<main>
  <form>

    <div class="field">
      <input type="email" name="email" class="input" placeholder=" " />
      <label for="email" class="label">Email</label>
    </div>

    <div class="field">
      <input
        type={showPassword ? 'text' : 'password'}
        class="input"
        placeholder="
        "
        on:input={validatePassword} />
      <label for="password" class="label">Password</label>
      <span
        class="toggle-password"
        on:mousedown={() => (showPassword = true)}
        on:mouseup={() => (showPassword = false)}>
        {showPassword ? '🙈' : '👁'}
      </span>
    </div>

    <div class="strength">
      <span class="bar bar-1" class:bar-show={strength > 0} />
      <span class="bar bar-2" class:bar-show={strength > 1} />
      <span class="bar bar-3" class:bar-show={strength > 2} />
      <span class="bar bar-4" class:bar-show={strength > 3} />
    </div>

    <ul>
      <li>{validations[0] ? '✅' : '❌'} must be atleast 6 Characters</li>
      <li>
        {validations[1] ? '✅' : '❌'} must contain atleast one Capital letter
      </li>
      <li>{validations[2] ? '✅' : '❌'} must contain atleast one Number</li>
      <li>
        {validations[3] ? '✅' : '❌'} must contain one of the Special
        characters $&@#^%*!
      </li>
    </ul>

    <div class="strength-text">Password Strength: {strengthText[strength]}</div>

  </form>
</main>
