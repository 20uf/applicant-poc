<?php

/*
 * This file is part of the Certificationy Applicant project.
 *
 * (c) Michael COULLERET <michael.coulleret@gmail.com>
 * (c) Mickaël Andrieu <andrieu.travail@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Applicant\Transformer;

use Applicant\Model\Question;
use Certificationy\Collections\Answers;
use Certificationy\Collections\Questions;

class QuestionsTransformer
{
    public function transform(Questions $questions): Questions
    {
        $collectionQuestions = new Questions();

        foreach ($questions as $id => $question)
        {
            $answers = $this->hydrateAnswer($question->getAnswers());

            $newQuestion = new Question(
                $question->getQuestion(),
                $question->getCategory(),
                $answers,
                $question->getHelp()
            );

            $newQuestion->setId($id);
        }

        return $collectionQuestions;
    }

    public function hydrateAnswer(Answers $answers): Answers
    {
        $collectionAnswers = new Answers();

        foreach ($answers as $id => $answer)
        {
            $newAnswer = clone $answer;
            $newAnswer->setId($id);
        }

        return $collectionAnswers;
    }
}
