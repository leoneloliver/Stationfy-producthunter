function AvatarController($scope) {
    $scope.avatars = [
        {id: 1, name: 'Mitali Pattnaik', photo: 'https://ph-avatars.imgix.net/28320/original?auto=format', description: 'Co-founder, Intro. Former PM at Twitter'},
        {id: 2, name: 'AJ Vaynerchuk', photo: 'https://ph-avatars.imgix.net/221576/original?auto=format', description: 'Cofounder, VaynerMedia'},
        {id: 3, name: 'Grant Cardone', photo: 'https://ph-files.imgix.net/1220f90d-5ccf-4f30-8fc0-2c06e40eb599?auto=format', description: 'International sales expert & New York'},
        {id: 4, name: 'Robert Herjavec', photo: 'https://ph-avatars.imgix.net/512280/original?auto=format', description: 'Shark on ABCs Shark Tank & Founder of...'},
        {id: 5, name: 'Gil Penchina', photo: 'https://ph-avatars.imgix.net/70153/original?auto=format', description: 'Founder of Flight.vc and super angel.'}
    ];
    $scope.predicate = 'id';
}
function CollectController($scope) {
    $scope.collects = [
        {id: 1,   title: 'Stop Forgetting Things', desc: 'Get Reminded To Do Things So You Don\'t Forget', img: 'https://aws.producthunt.com/collection/113727/list_view_banner_Baby-Elephants-Playing-l.jpg'},
        {id: 2,   title: 'Productivity Hacks', desc: 'Apps that increase productivity and promote sanity ;)', img: 'https://aws.producthunt.com/collection/24421/list_view_banner_computer-b-and-w.jpg'},
        {id: 3,   title: 'Alternatives To Sunrise', desc: 'Calendar apps you’ll love. RIP Sunrise. 🙏', img: 'https://aws.producthunt.com/collection/112637/list_view_banner_Screen_Shot_2016-05-11_at_21.10.42.png'},
        {id: 4,   title: 'An API for Everything', desc: 'With this collection, rest assured that \"there\'s an API for that\"', img: 'https://aws.producthunt.com/collection/50615/list_view_banner_Keep-Your-Programming-Code-Safe-Obfuscate-It-480832-2.jpg'}
    ];
    $scope.predicate = 'id';
}
function ListaController($scope) {
    $scope.itens = [
        {id: 4, data: '2016-04-09', tag: 'iphone', share: '3', coment: '7', produto: 'Distorted Button Effects', foto: 'https://ph-files.imgix.net/9a1621bc-ddbc-4f58-81fa-02051ed13ed8?auto=format', descricao: 'Highly experimental distortion effects for buttons', author: 'Rian Hudson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/zack415/128.jpg'},
        {id: 5, data: '2016-04-25', tag: 'android', share: '12', coment: '6', produto: 'Instagram 8', foto: 'https://ph-files.imgix.net/e8f6e835-6fdb-478f-9796-b7813e4faee6?auto=format', descricao: 'A new look for Instagram', author: 'Erik Jonson', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg'},
        {id: 3, data: '2016-04-04', tag: 'apple', share: '30', coment: '8', produto: 'Reindex', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c?auto=format', descricao: 'GraphQL backend as a service', author: 'Catarino Possi', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/catarino/128.jpg'},
        {id: 1, data: '2016-04-30', tag: 'google', share: '3', coment: '23', produto: 'Spaces by Google', foto: 'https://ph-files.imgix.net/30972db6-1173-4b1a-91d2-1f20c3f8caed?auto=format', descricao: 'Small group sharing for everything in life', author: 'Juan Novisk', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/c_southam/128.jpg'},
        {id: 2, data: '2016-04-08', tag: 'web', share: '2', coment: '7', produto: 'JackThreads TryOuts', foto: 'https://ph-files.imgix.net/b1816883-16c3-4fbe-8d2a-de332b702f75?auto=format', descricao: 'Try first. Pay later. Never buy before you try — ever again', author: 'Henry Buterman', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/felipebsb/128.jpg'},
        {id: 6, data: '2016-04-02', tag: 'programing', share: '5', coment: '33', produto: 'Medium CLI', foto: 'https://ph-files.imgix.net/4b3828d3-01e5-4891-856f-680fdd879b43?auto=format', descricao: 'A command line Interface for reading Medium stories', author: 'Sarah Mitnik', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'},
        {id: 7, data: '2016-04-09', tag: 'marketing', share: '15', coment: '12', produto: 'Trakto', foto: 'https://ph-files.imgix.net/cb846e26-4d5e-4560-a292-81f86a2b3d48?auto=format', descricao: 'An app to design, share & track amazing marketing materials', author: 'Kie Ozakawa', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg'},
        {id: 8, data: '2016-04-10', tag: 'tech', share: '40', coment: '100', produto: 'The Twenty Minute VC: Rob Go, Co-Founder & Partner @ NextView Ventures', foto: 'https://ph-files.imgix.net/230a33aa-eb7d-49e5-afa9-401dbe0645ce?auto=format', descricao: 'What does seed funding really mean today?', author: 'Mary Anthonelly', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'},
        {id: 9, data: '2016-04-04', tag: 'iphone', share: '56', coment: '99', produto: 'Quote of the Day', foto: 'https://ph-files.imgix.net/65988a39-40f1-4daf-a3fb-9f69d6296bc9?auto=format', descricao: 'Start each day motivated and inspired!', author: 'Kin choiung', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
        {id: 10, data: '2016-04-30', tag: 'android', share: '5', coment: '10', produto: 'Real-Time Technology: Moving Beyond Static Apps', foto: 'https://ph-files.imgix.net/ade0dc7c-2c7f-4545-ac37-d90dcef421e1?auto=format', descricao: 'A look at users and technology', author: 'Jasmini Santti', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'},
        {id: 11, data: '2016-04-30', tag: 'meeting', share: '9', coment: '1', produto: 'Bench', foto: 'https://ph-files.imgix.net/fcd23df6-0d06-4096-bfa2-7f5ecf98f741?auto=format', descricao: 'Rapid fire meetings to get shit done', author: 'Sophia Oliver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/esthercrawford/128.jpg'},
        {id: 12, data: '2016-04-30', tag: 'web', share: '21', coment: '4', produto: 'Getbadges', foto: 'https://ph-files.imgix.net/0a71d853-5f04-42bd-8c31-b938089caa7f?auto=forma', descricao: 'Gamification for your team\'s projects', author: 'Oswald Mjurk', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg'},
        {id: 13, data: '2016-05-01', tag: 'android', share: '18', coment: '14', produto: 'Mekorama', foto: 'https://ph-files.imgix.net/22497cd8-3df9-4aeb-a450-b17b4c6231f4?auto=format', descricao: 'A puzzle game where you help a tiny robot stumble home', author: 'Alexia Medeltzkts', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/128.jpg'},
        {id: 14, data: '2016-04-01', tag: 'android', share: '39', coment: '12', produto: 'HalftonePro', foto: 'https://ph-files.imgix.net/d7ac209f-9a1c-4377-9cd9-4e3f2c6dfbf4?auto=format', descricao: 'Create custom vector halftones quickly and easily', author: 'Albert Simon', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jodyferry/128.jpg'},
        {id: 15, data: '2016-04-27', tag: 'development', share: '55', coment: '98', produto: 'nlp_compromise', foto: 'https://ph-files.imgix.net/7feeda8b-e856-49ec-bf20-3c91f33fd89b?auto=format', descricao: 'NLP tool for understanding, changing & playing with english', author: 'Javier Molegos', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg'},
        {id: 16, data: '2016-04-25', tag: 'web', share: '78', coment: '52', produto: 'Vindora', foto: 'https://ph-files.imgix.net/f89f7f88-af5e-44fb-bce8-b1e037542a7d?auto=format', descricao: 'Relaxing alpine ambients to keep you calm', author: 'Bruno Zunki', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg'},
        {id: 17, data: '2016-04-24', tag: 'apis', share: '57', coment: '58', produto: 'SignaKit', foto: 'https://ph-files.imgix.net/87b900ce-23cc-47f9-ad7d-12caae1d26e0?auto=format', descricao: 'Handwritten signature framework for iOS', author: 'Morgan Hulty', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/beastydesign/128.jpg'},
        {id: 18, data: '2016-04-21', tag: 'apis', share: '8', coment: '81', produto: 'Netbeast API', foto: 'https://ph-files.imgix.net/bc278644-1312-4422-b4fc-8354d627133c?auto=format', descricao: 'An IoT development platform', author: 'Mathew Rich', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bramk/128.jpg'},
        {id: 19, data: '2016-04-29', tag: 'web', share: '49', coment: '18', produto: 'Lattice', foto: 'https://ph-files.imgix.net/677235b9-7f5d-461f-adf1-4ce9bf693d8f?auto=format', descricao: 'An elegant goal setting tool to keep your team aligned', author: 'Ross Tornigtuj', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rosspw/128.jpg'},
        {id: 20, data: '2016-04-29', tag: 'apps', share: '7', coment: '2', produto: 'Tribes', foto: 'https://ph-files.imgix.net/44b7219b-28c1-496f-9c95-6d2983e4da36?auto=format', descricao: 'Build habits with friends', author: 'Andre Takuia', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andretacuyan/128.jpg'}
    ];
    $scope.predicate = '-data';
}
function ListaCatController($scope) {
    $scope.categories = [
        {id: 1, data: '2016-04-09', icon: '🍎  ', nome: 'Mac', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 5, data: '2016-04-10', icon: '😸  ', nome: 'Cats', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 3, data: '2016-04-04', icon: '🎨 ', nome: 'Design Tools', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 4, data: '2016-04-30', icon: '💻 ', nome: 'Developer Tools', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 2, data: '2016-04-08', icon: '🏡 ', nome: 'Smart Home', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 1, data: '2016-04-02', icon: '📚 ', nome: 'Startup Books', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 6, data: '2016-04-02', icon: '👻  ', nome: 'Snapchat', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 6, data: '2016-04-02', icon: '💪 ', nome: 'Health and Fitness', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 7, data: '2016-04-02', icon: '🎧 ', nome: 'Tech Podcasts', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},
        {id: 8, data: '2016-04-02', icon: '☕️ ', nome: 'Coffee', foto: 'https://ph-files.imgix.net/c08f5307-0bc8-418a-b912-8ccadc87fb9c', descricao: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'}  
    ];
    $scope.predicate = '-data';
    $scope.quantity = 5;
}
function TopicController($scope) {
    $scope.topics = [
        {id: 1, title: 'Analytics', icon: 'https://twemoji.maxcdn.com/36x36/1f525.png'},
        {id: 2, title: 'Education', icon: 'https://twemoji.maxcdn.com/36x36/1f525.png'},
        {id: 3, title: 'Maps', icon: 'https://twemoji.maxcdn.com/36x36/1f525.png'},
        {id: 4, title: 'Marketing', icon: 'https://twemoji.maxcdn.com/36x36/1f525.png'},
        {id: 5, title: 'Hire me =)', icon: 'https://twemoji.maxcdn.com/36x36/1f525.png'},
        {id: 6, title: 'Travel', icon: 'https://twemoji.maxcdn.com/36x36/1f525.png'}   
    ];
    $scope.predicate = 'id';
}