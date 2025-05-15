/*
 *
 * - Level [0..2]: 0 disables the rule. For 1 it will be considered a warning for 2 an error.
 * - Applicable always|never: never inverts the rule.
 * - Value: value to use for this rule.
 * 
 * example 
 *   rules: {
    "header-max-length": [Level, "Applicable", Value], 
    "header-max-length": [0, "always", 72], 
  },
 *
*/

const configuration = {
  rules: {
    /* HEADER type(scope): subject */
    /* Тип */
    // Тип не может быть пустым
    "type-empty": [2, "never"],
    // Тип всегда только в нижнем регистре
    "type-case": [2, "always", "lower-case"],
    // Перечислим все возможные типы коммитов
    "type-enum": [
      2,
      "always",
      [
        "docs",
        "feat",
        "fix", 
        "refactor", 
        "build",
        "chore",
        "ci",
        "style",
        "perf",
        "revert",
        "test"
      ]
    ],
    // Максимальная длина заголовка 100 символов
    "header-max-length": [2, "always", 100],

    /* Область(scope) */
    // Область всегда только в нижнем регистре
    "scope-case": [2, "always", "lower-case"],

    /* Описание */
    // Описание не может быть пустым
    "subject-empty": [2, "never"],
    // Описание не должно заканчиваться '.'
    "subject-full-stop": [2, "never", "."],
    // Описание не быть короче 5
    "subject-min-length": [2, "always", 5],
    "subject-exclamation-mark": [2, 'never'],


    /* BODY discuss: нужно ли нам вообще тело для коммитов? */
    // Тело коммита должно начинаться с пустой строки
    "body-leading-blank": [2, "always"],


    /* FOOTER */
    // Нижний колонтитул коммита должен начинаться с пустой строки
    "footer-leading-blank": [2, "always"],
  }
};
export default configuration