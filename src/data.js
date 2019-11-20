//Construct rules: Use only single alphabetical character to represent variables to be substituted
//"<unique identifier": new Rule("<rule name>", [<premise1>,...], "<conclusion>")
var builtin_rules = { //Fundamental Logical Rules
                      "&I" : new Rule("Introdução Conjunta", ["A", "B"], "A & B"),
                      "&I1": new Rule("Eliminação da Conjunção 1", ["A & B"], "A"),
                      "&I2": new Rule("Eliminação da Conjunção 2", ["A & B"], "B"),
                      "vI1": new Rule("Introdução Disjunta 1", ["A"], "A v B"),
                      "vI2": new Rule("Introdução Disjunta 2", ["A"], "B v A"),
                      "vE" : new Rule("Eliminação da Disjunção", ["A v B", "A => C", "B => C"], "C"),
                      "~~E": new Rule("Elim. da Dupla Negação", ["~~A"], "A"),
                      "~I" : new Rule("Introdução da Negação", ["A => (B & ~B)"], "~A"),
                      "=>I": new Rule("Discharge Rule", ["A |- B"], "A => B"),
                      //Extra Logical Rules
                      "~~I": new Rule("Introdução a Dupla Negação", ["A"], "~~A"),
                      "MP" : new Rule("Modus Ponens", ["A", "A => B"], "B"),
                      "MT" : new Rule("Modus Tollens", ["A => B", "~B"], "~A"),
                      "DS" : new Rule("Silgismo Disjuntivo", ["A v B", "~A"], "B"),
                      "Iter" : new Rule("Iteração", ["A"], "A")
                    };

//Constants
var EXPR_STRING_CLASS_NAME = "expression_string";
var EXPR_MODIFIER_CLASS_NAME = "expression_modifier";
var EXPR_ITEM_CLASS_NAME = "expression_content";
var EXPR_ITEM_SELECTED_CLASS_NAME = "expression_content_selected";
var EXPR_PREFIX = "expr_";
var SCOPE_PREFIX = "scope_";

var INVALID_SCOPE = 1;
var INVALID_MATCH_QUANTITY = 2;
var INVALID_MATCH_QUALITY = 3;
var ERROR_MESSAGE_SCOPE= "Some premises cannot be used under current scope";
var ERROR_MESSAGE_MATCH_QUANTITY = "Invalid number of premises";
var ERROR_MESSAGE_MATCH_QUALITY = "Premises cannot match selected rule pattern";
var ERROR_RULE_ALREADY_EXISTS = "Rule identifier already exists";