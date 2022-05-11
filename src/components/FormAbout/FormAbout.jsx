import React from "react";
import { Form, FormItem } from "./index";
import { BsArrowRight } from "react-icons/bs";
// === Components ===
import BtnSub from "../BtnSub/BtnSub";
import Theme from "../../Theme/Theme";
const FormAbout = () => {
  return (
    <Theme>
      <Form>
        <div>
          <FormItem
            type="text"
            name="name"
            placeholder="Your Name *"
            className="w-50"
          />
          <FormItem
            type="text"
            name="email"
            placeholder="Email Address *"
            className="w-50"
          />
        </div>
        <FormItem type="text" name="phone" placeholder="Phone *" />
        <FormItem
          as="textarea"
          name="content"
          cols="40"
          rows="3"
          type="text"
          placeholder="Your Message *"
        />
        <BtnSub type="submit">
          Send Message
          <span>
            <BsArrowRight />
          </span>
        </BtnSub>
      </Form>
    </Theme>
  );
};

export default FormAbout;
