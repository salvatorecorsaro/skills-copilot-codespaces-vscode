function skillsMember() {
    var name = 'Skills Member';
    this.getName = function() {
        return name;
    };
    this.getSkills = function() {
        return ['JavaScript', 'Java', 'C#', 'HTML', 'CSS'];
    };
}