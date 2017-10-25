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

namespace Applicant\Model;

use Certificationy\Answer as BaseAnswer;

class Answer extends BaseAnswer
{
    /**
     * @var int
     */
    protected $id;

    /**
     * @var bool
     */
    protected $userIsCorrect;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id)
    {
        $this->id = $id;
    }

    public function isUserIsCorrect(): bool
    {
        return $this->userIsCorrect;
    }

    public function setUserIsCorrect(bool $userIsCorrect)
    {
        $this->userIsCorrect = $userIsCorrect;
    }
}
