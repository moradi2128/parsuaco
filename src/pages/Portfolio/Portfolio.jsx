import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import {
  Container,
  FilterWrapper,
  Filter,
  TitleFilter,
  Card,
  FilterContainer,
  CardDirection,
  CardDescriptionTitle,
  CardDescriptionLink,
} from "./index";
import IsoTopeGrid from "react-isotope";
// === Icons ===
import { BsArrowRight } from "react-icons/bs";
// === Components ===
import Theme from "../../Theme/Theme";

// === Data ===
import { cardsDefault, filtersDefault } from "../../data";

const Portfolio = () => {
  const [filters, updateFilters] = useState(filtersDefault);
  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) => {
      return state.map((f) => {
        f.isChecked = false;
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }

        return f;
      });
    });
  };
  return (
    <Theme>
      <main>
        <section>
          <FilterWrapper>
            <TitleFilter>
              work filter
              <BsArrowRight />
            </TitleFilter>
            <FilterContainer>
              {filters.map((f) => (
                <Filter key={`${f.label}_key`}>
                  <input
                    id={f.label}
                    type="checkbox"
                    value={f.label}
                    onChange={onFilter}
                    checked={f.isChecked}
                  />
                  <label htmlFor={f.label}>{f.label}</label>
                </Filter>
              ))}
            </FilterContainer>
          </FilterWrapper>
          <Container>
            <IsoTopeGrid
              gridLayout={cardsDefault}
              noOfCols={1}
              unitWidth={200}
              unitHeight={100}
              filters={filters}
            >
              {cardsDefault.map((card) => (
                <Card key={card.id} className={`card ${card.filter[0]}`}>
                  <div className="tags">
                    <img src={card.image} alt={card.id} />
                    <CardDirection className="card-direction">
                      <CardDescriptionTitle className="card-description-title">
                        {card.title}
                      </CardDescriptionTitle>
                      <CardDescriptionLink className="card-description-link line-bottom">
                        <Link to={card.linkTo}>
                          {card.linkText}
                          <BsArrowRight />
                        </Link>
                      </CardDescriptionLink>
                    </CardDirection>
                  </div>
                </Card>
              ))}
            </IsoTopeGrid>
          </Container>
        </section>
      </main>
    </Theme>
  );
};

export default Portfolio;
