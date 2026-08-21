function getReply(question) {
    question = question.toLowerCase();

    if (question === "course") {
        return "We offer BCA, BSc, and BCom.";
    } 
    else if (question === "fees") {
        return "The annual fee is ₹50,000.";
    } 
    else if (question === "admission") {
        return "Admissions are open from June to August.";
    } 
    else if (question === "contact") {
        return "Call us at 9876543210.";
    } 
    else {
        return "Sorry! I don't understand your question.";
    }
}

module.exports = { getReply };