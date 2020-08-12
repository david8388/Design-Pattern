/**
 * Interview interface
 * askQuestions()
 */
class Developer {
  askQuestions() {
    console.log('Asking about design patterns')
  }
}

class CommunityExecutive {
  askQuestions() {
    console.log('Asking about community building')
  }
}

class HiringManager {
  takeInterview() {
    const interviewer = this.makeInterviewer()
    interviewer.askQuestions()
  }
}

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer()
  }
}

class MarketingManger extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive()
  }
}

const devManager = new DevelopmentManager()
devManager.takeInterview()

const marketingManager = new MarketingManger()
marketingManager.takeInterview()
